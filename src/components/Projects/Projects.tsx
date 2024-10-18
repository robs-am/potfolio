import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Github, Globe } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import projectData from "../../data/project.json";

interface ProjectProps {
  className?: string;
  id: string;
  name: string;
  description: string;
  html_url: string;
  image: string;
  live: string;
}

export function Projects({ className, ...props }: ProjectProps) {
  return (
    <div id="projects" className="projects-container flex flex-wrap gap-4">
      {projectData.map((project) => (
        <Card key={project.id} className={cn("w-[380px]", className)} {...props}>
          <CardHeader>
            <CardTitle>{project.name}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <img src={project.image} alt={`${project.name} preview`} className="mb-2 w-full h-auto" />
            <p className="text-sm text-muted-foreground">
              <a href={project.html_url} target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
            </p>
          </CardContent>
          <CardFooter className="flex gap-4">
            <Button className="w-full">
              <Github className="mr-2 h-4 w-4" />
              <a href={project.html_url} target="_blank" rel="noopener noreferrer">Ver no Github</a>
            </Button>
            <Button className="w-full">
              <Globe className="mr-2 h-4 w-4" />
              <a href={project.live} target="_blank" rel="noopener noreferrer">Deploy</a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default Projects;
