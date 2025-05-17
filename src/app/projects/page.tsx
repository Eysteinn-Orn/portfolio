import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col place-items-center-safe">
      <h1 className="text-4xl font-bold mb-12">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {[...Array(5)].map((_, i) => (
          <Card key={i} className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Project {i + 1}</CardTitle>
              <CardDescription>A brief description of project {i + 1}.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Some more details about this awesome project can go here. It&apos;s a placeholder for now.</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
