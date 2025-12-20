import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";
import { Download, RefreshCw } from "lucide-react";
import { format } from "date-fns";
import { nl } from "date-fns/locale";

interface ContactSubmission {
  id: string;
  naam: string;
  email: string;
  telefoon: string | null;
  bedrijfsnaam: string | null;
  onderwerp: string;
  bericht: string;
  created_at: string;
}

export default function AdminInzendingen() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchSubmissions = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("contact_submissions")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setSubmissions(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const exportToCSV = () => {
    if (submissions.length === 0) return;

    const headers = ["Datum", "Naam", "E-mail", "Telefoon", "Bedrijf", "Onderwerp", "Bericht"];
    const csvData = submissions.map((s) => [
      format(new Date(s.created_at), "dd-MM-yyyy HH:mm", { locale: nl }),
      s.naam,
      s.email,
      s.telefoon || "",
      s.bedrijfsnaam || "",
      s.onderwerp,
      s.bericht.replace(/"/g, '""'),
    ]);

    const csvContent = [
      headers.join(";"),
      ...csvData.map((row) => row.map((cell) => `"${cell}"`).join(";")),
    ].join("\n");

    const blob = new Blob(["\ufeff" + csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `safegrip-inzendingen-${format(new Date(), "yyyy-MM-dd")}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Layout>
      <Helmet>
        <title>Inzendingen Overzicht | SafeGrip Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <section className="py-12">
        <div className="container">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                Contactformulier Inzendingen
              </h1>
              <p className="text-muted-foreground">
                {submissions.length} inzending{submissions.length !== 1 ? "en" : ""} totaal
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={fetchSubmissions} disabled={loading}>
                <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
                Vernieuwen
              </Button>
              <Button onClick={exportToCSV} disabled={submissions.length === 0}>
                <Download className="h-4 w-4 mr-2" />
                Exporteer CSV
              </Button>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12 text-muted-foreground">
              Laden...
            </div>
          ) : submissions.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              Nog geen inzendingen ontvangen.
            </div>
          ) : (
            <div className="rounded-lg border border-border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead>Datum</TableHead>
                    <TableHead>Naam</TableHead>
                    <TableHead>E-mail</TableHead>
                    <TableHead>Bedrijf</TableHead>
                    <TableHead>Onderwerp</TableHead>
                    <TableHead className="max-w-xs">Bericht</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {submissions.map((submission) => (
                    <TableRow key={submission.id}>
                      <TableCell className="whitespace-nowrap">
                        {format(new Date(submission.created_at), "dd MMM yyyy HH:mm", { locale: nl })}
                      </TableCell>
                      <TableCell className="font-medium">{submission.naam}</TableCell>
                      <TableCell>
                        <a href={`mailto:${submission.email}`} className="text-primary hover:underline">
                          {submission.email}
                        </a>
                      </TableCell>
                      <TableCell>{submission.bedrijfsnaam || "-"}</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                          {submission.onderwerp}
                        </span>
                      </TableCell>
                      <TableCell className="max-w-xs truncate" title={submission.bericht}>
                        {submission.bericht}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
