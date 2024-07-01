import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-8 p-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Circadian Rhythm Control</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col items-center space-y-2">
            <Label htmlFor="brightness">Brightness</Label>
            <Slider id="brightness" defaultValue={[50]} max={100} step={1} className="w-full" />
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Label htmlFor="color-temperature">Color Temperature</Label>
            <Slider id="color-temperature" defaultValue={[2700]} min={2000} max={6500} step={100} className="w-full" />
          </div>
          <Button className="w-full">Apply Settings</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;