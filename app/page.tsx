"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import {
  Database,
  Users,
  Globe,
  Shield,
  Settings,
  Plus,
  ExternalLink,
  Lock,
  CheckCircle,
  AlertCircle,
  Copy,
  Server,
  Cloud,
} from "lucide-react"

export default function FirebaseStudioHTTPS() {
  const [selectedProject, setSelectedProject] = useState("firebase-studio-workstation")
  const [httpsEnabled, setHttpsEnabled] = useState(true)
  const [copied, setCopied] = useState(false)

  const workstationUrl =
    "https://9000-firebase-studio-1749928340921.cluster-ombtxv25tbd6yrjpp3lukp6zhc.cloudworkstations.dev"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(workstationUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const projects = [
    { id: "firebase-studio-workstation", name: "Firebase Studio - Cloud Workstation", status: "active" },
    { id: "firebase-studio-prod", name: "Firebase Studio (Production)", status: "active" },
    { id: "firebase-studio-dev", name: "Firebase Studio (Development)", status: "active" },
  ]

  const domains = [
    {
      domain: "9000-firebase-studio-1749928340921.cluster-ombtxv25tbd6yrjpp3lukp6zhc.cloudworkstations.dev",
      type: "Cloud Workstation",
      https: true,
      status: "active",
      ssl: "Google Cloud SSL",
      port: "9000",
    },
    {
      domain: "firebase-studio.web.app",
      type: "Firebase",
      https: true,
      status: "active",
      ssl: "Auto-managed",
      port: "443",
    },
    {
      domain: "firebase-studio.firebaseapp.com",
      type: "Firebase",
      https: true,
      status: "active",
      ssl: "Auto-managed",
      port: "443",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">F</span>
                </div>
                <h1 className="text-xl font-semibold text-gray-900">Firebase Studio</h1>
                <Badge variant="outline" className="text-blue-600 border-blue-600">
                  <Cloud className="w-3 h-3 mr-1" />
                  Cloud Workstation
                </Badge>
              </div>
              <select
                value={selectedProject}
                onChange={(e) => setSelectedProject(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm"
              >
                {projects.map((project) => (
                  <option key={project.id} value={project.id}>
                    {project.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-green-600 border-green-600">
                <CheckCircle className="w-3 h-3 mr-1" />
                HTTPS Active
              </Badge>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* URL Sharing Card */}
        <Card className="mb-6 border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-blue-900">
              <Server className="w-5 h-5" />
              <span>Adresse de partage - Cloud Workstation</span>
            </CardTitle>
            <CardDescription className="text-blue-700">
              Partagez cette adresse HTTPS sécurisée avec vos amis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2 p-3 bg-white rounded-lg border">
              <Lock className="w-4 h-4 text-green-600" />
              <code className="flex-1 text-sm font-mono text-gray-800 break-all">{workstationUrl}</code>
              <Button variant="outline" size="sm" onClick={copyToClipboard} className="shrink-0 bg-transparent">
                {copied ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-1 text-green-600" />
                    Copié !
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-1" />
                    Copier
                  </>
                )}
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href={workstationUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
            <div className="mt-3 flex items-center space-x-4 text-sm text-blue-700">
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-1" />
                SSL/TLS Activé
              </span>
              <span className="flex items-center">
                <Server className="w-4 h-4 mr-1" />
                Port 9000
              </span>
              <span className="flex items-center">
                <Shield className="w-4 h-4 mr-1" />
                Google Cloud Security
              </span>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="hosting" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="hosting" className="flex items-center space-x-2">
              <Globe className="w-4 h-4" />
              <span>Hosting</span>
            </TabsTrigger>
            <TabsTrigger value="auth" className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Authentication</span>
            </TabsTrigger>
            <TabsTrigger value="database" className="flex items-center space-x-2">
              <Database className="w-4 h-4" />
              <span>Database</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>Security</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center space-x-2">
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="hosting" className="space-y-6">
            {/* Cloud Workstation HTTPS Status */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <Lock className="w-5 h-5 text-green-600" />
                      <span>Configuration HTTPS - Cloud Workstation</span>
                    </CardTitle>
                    <CardDescription>Sécurisation automatique via Google Cloud Platform</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    SSL Actif
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-medium text-green-900">HTTPS Activé Automatiquement</p>
                      <p className="text-sm text-green-700">Certificat SSL géré par Google Cloud</p>
                    </div>
                  </div>
                  <Switch checked={httpsEnabled} onCheckedChange={setHttpsEnabled} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Certificat SSL</h4>
                    <p className="text-sm text-gray-600 mb-2">Google Cloud SSL</p>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      Valide et Auto-renouvelé
                    </Badge>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Port d'écoute</h4>
                    <p className="text-sm text-gray-600 mb-2">Port 9000</p>
                    <Badge variant="outline">Configuré</Badge>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Sécurité</h4>
                    <p className="text-sm text-gray-600 mb-2">Headers de sécurité</p>
                    <Badge variant="outline">Actifs</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Domains Management */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Domaines et URLs</CardTitle>
                    <CardDescription>Gestion des domaines et URLs d'accès</CardDescription>
                  </div>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Ajouter un domaine
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {domains.map((domain, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          {domain.https ? (
                            <Lock className="w-4 h-4 text-green-600" />
                          ) : (
                            <AlertCircle className="w-4 h-4 text-orange-500" />
                          )}
                          <span className="font-medium text-sm break-all">{domain.domain}</span>
                        </div>
                        <Badge variant={domain.status === "active" ? "default" : "secondary"}>{domain.status}</Badge>
                        <Badge variant="outline">{domain.type}</Badge>
                        {domain.port && (
                          <Badge variant="outline" className="text-blue-600">
                            Port {domain.port}
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">{domain.ssl}</span>
                        <Button variant="ghost" size="sm" asChild>
                          <a href={`https://${domain.domain}`} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            navigator.clipboard.writeText(`https://${domain.domain}`)
                          }}
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Sharing Instructions */}
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Instructions de partage</CardTitle>
                <CardDescription>Comment partager votre Firebase Studio avec vos amis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <p className="font-medium">Copiez l'URL complète</p>
                      <p className="text-sm text-gray-600">
                        Utilisez le bouton "Copier" ci-dessus pour copier l'adresse complète
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Partagez via vos canaux préférés</p>
                      <p className="text-sm text-gray-600">Email, WhatsApp, Slack, Discord, etc.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Accès sécurisé garanti</p>
                      <p className="text-sm text-gray-600">Vos amis accèderont via HTTPS avec certificat SSL valide</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="auth" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Fournisseurs d'authentification</CardTitle>
                <CardDescription>Configuration des méthodes de connexion</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["Email/Mot de passe", "Google", "GitHub", "Facebook"].map((provider) => (
                    <div key={provider} className="flex items-center justify-between p-4 border rounded-lg">
                      <span className="font-medium">{provider}</span>
                      <Switch />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="database" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Base de données Firestore</CardTitle>
                <CardDescription>Base de données NoSQL avec synchronisation en temps réel</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <div>
                      <p className="font-medium">Statut de la base de données</p>
                      <p className="text-sm text-gray-600">Prête pour la production</p>
                    </div>
                    <Badge className="bg-blue-600">Active</Badge>
                  </div>
                  <Button>Ouvrir la console de base de données</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Règles de sécurité</CardTitle>
                <CardDescription>Configuration du contrôle d'accès pour vos services Firebase</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Règles Firestore</h4>
                    <p className="text-sm text-gray-600 mb-2">Dernière mise à jour : il y a 2 heures</p>
                    <Button variant="outline" size="sm">
                      Modifier les règles
                    </Button>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Règles de stockage</h4>
                    <p className="text-sm text-gray-600 mb-2">Dernière mise à jour : il y a 1 jour</p>
                    <Button variant="outline" size="sm">
                      Modifier les règles
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Paramètres du projet</CardTitle>
                <CardDescription>Configuration générale de votre projet Firebase</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="project-name">Nom du projet</Label>
                  <Input id="project-name" value="Firebase Studio - Cloud Workstation" className="max-w-md" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="project-id">ID du projet</Label>
                  <Input id="project-id" value="firebase-studio-workstation" disabled className="max-w-md" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="workstation-url">URL Cloud Workstation</Label>
                  <Input id="workstation-url" value={workstationUrl} disabled className="max-w-full" />
                </div>
                <Button>Sauvegarder les modifications</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
