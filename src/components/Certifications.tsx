import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  Award, 
  Download, 
  Eye, 
  Calendar, 
  FileText,
  ExternalLink,
  Loader2
} from "lucide-react";

interface Certificate {
  id: string;
  name: string;
  filename: string;
  size: number;
  lastModified: string;
  url: string;
}

const Certifications = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  useEffect(() => {
    fetchCertificates();
  }, []);

  

  const fetchCertificates = async () => {
    try {
      setLoading(true);
      const API_BASE = (import.meta as any).env?.VITE_API_BASE_URL || 'http://localhost:3001';
      const response = await fetch(`${API_BASE}/api/certificates`);
      const data = await response.json();
      if (data?.success && Array.isArray(data.certificates)) {
        setCertificates(data.certificates as Certificate[]);
      } else {
        throw new Error(data?.error || 'Failed to fetch certificates');
      }
    } catch (err) {
      setError('Unable to connect to server. Please make sure the backend is running.');
      console.error('Error fetching certificates:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getCertificateType = (name: string) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('microsoft') || lowerName.includes('power bi')) return 'Microsoft';
    if (lowerName.includes('google')) return 'Google';
    if (lowerName.includes('uipath')) return 'UiPath';
    if (lowerName.includes('accenture')) return 'Accenture';
    if (lowerName.includes('goldman')) return 'Goldman Sachs';
    if (lowerName.includes('tata')) return 'TATA';
    if (lowerName.includes('boston')) return 'Boston Consulting';
    if (lowerName.includes('ibm')) return 'IBM';
    return 'Professional';
  };

  const getCertificateColor = (type: string) => {
    const colors: { [key: string]: string } = {
      'Microsoft': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Google': 'bg-green-500/20 text-green-400 border-green-500/30',
      'UiPath': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      'Accenture': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      'Goldman Sachs': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      'TATA': 'bg-red-500/20 text-red-400 border-red-500/30',
      'Boston Consulting': 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
      'IBM': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
      'Professional': 'bg-accent/20 text-accent border-accent/30'
    };
    return colors[type] || colors['Professional'];
  };

  if (loading) {
    return (
      <section id="certifications" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-primary">Certifications</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional certifications and achievements
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="p-6 bg-gradient-card border-border/50">
                <Skeleton className="h-4 w-3/4 mb-4" />
                <Skeleton className="h-3 w-1/2 mb-2" />
                <Skeleton className="h-3 w-1/3" />
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="certifications" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-primary">Certifications</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional certifications and achievements
            </p>
          </div>
          <Card className="p-8 bg-gradient-card border-border/50 text-center">
            <div className="text-destructive mb-4">
              <FileText className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Unable to Load Certifications</h3>
              <p className="text-muted-foreground mb-4">{error}</p>
              <Button onClick={fetchCertificates} variant="outline">
                <Loader2 className="w-4 h-4 mr-2" />
                Retry
              </Button>
            </div>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements ({certificates.length} certificates)
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => {
            const type = getCertificateType(cert.name);
            const colorClass = getCertificateColor(type);
            
            return (
              <Card 
                key={cert.id} 
                className="p-6 bg-gradient-card border-border/50 hover-lift transition-smooth group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-accent glow-accent">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <Badge className={colorClass}>
                        {type}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => setSelectedCert(cert)}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh]">
                        <DialogHeader>
                          <DialogTitle className="text-gradient-primary">
                            {cert.name}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="mt-4">
                           <iframe
                            src={`${((import.meta as any).env?.VITE_API_BASE_URL || 'http://localhost:3001')}${cert.url}`}
                            className="w-full h-[70vh] border rounded-lg"
                            title={cert.name}
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => window.open(`${((import.meta as any).env?.VITE_API_BASE_URL || 'http://localhost:3001')}${cert.url}`, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <h3 className="font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-smooth">
                  {cert.name}
                </h3>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(cert.date)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span>{formatFileSize(cert.size || 0)}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border/50">
                  <Button 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                    variant="outline"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = `${((import.meta as any).env?.VITE_API_BASE_URL || 'http://localhost:3001')}${cert.url}`;
                      link.download = cert.filename;
                      link.click();
                    }}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
