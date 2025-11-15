import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Logo } from '@/components/logo';
import { Lightbulb, Video, LayoutDashboard } from 'lucide-react';
import { ClientOnly } from './client-only';

const featureIcons = {
  'smart-lighting': <Lightbulb className="h-5 w-5 text-primary" />,
  'cctv-monitoring': <Video className="h-5 w-5 text-primary" />,
  'unified-dashboard': <LayoutDashboard className="h-5 w-5 text-primary" />,
};

const featureTitles = {
  'smart-lighting': 'Smart Lighting',
  'cctv-monitoring': 'CCTV Monitoring',
  'unified-dashboard': 'Unified Dashboard',
};

export function FeaturePreview() {
  return (
    <div className="relative hidden flex-col justify-between bg-secondary p-8 text-secondary-foreground lg:flex">
      <div className="absolute inset-0 bg-gradient-to-br from-background/10 via-transparent to-background/10" />
      <div className="relative z-10">
        <Logo />
      </div>

      <ClientOnly>
        <div className="relative z-10 mx-auto w-full max-w-md">
          <Carousel className="w-full">
            <CarouselContent>
              {PlaceHolderImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="overflow-hidden border-2 border-primary/20 bg-background/50 shadow-lg backdrop-blur-sm">
                      <CardContent className="flex aspect-[4/3] flex-col items-center justify-center p-6">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          width={800}
                          height={600}
                          className="rounded-lg object-cover"
                          data-ai-hint={image.imageHint}
                        />
                      </CardContent>
                    </Card>
                    <div className="mt-4 text-center">
                      <h3 className="flex items-center justify-center gap-2 text-xl font-bold font-headline">
                        {featureIcons[image.id as keyof typeof featureIcons]}
                        {featureTitles[image.id as keyof typeof featureTitles]}
                      </h3>
                      <p className="mt-2 text-sm text-secondary-foreground/80">{image.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12 text-foreground" />
            <CarouselNext className="-right-12 text-foreground" />
          </Carousel>
        </div>
      </ClientOnly>

      <footer className="relative z-10 text-center text-sm text-secondary-foreground/60">
        <ClientOnly>
          © {new Date().getFullYear()} Centryx Vision. All Rights Reserved.
        </ClientOnly>
      </footer>
    </div>
  );
}
