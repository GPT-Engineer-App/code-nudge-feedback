import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, AlertCircle } from "lucide-react";

const NoChangeMessage = ({ onClose }) => {
  return (
    <Card className="w-full max-w-md mx-auto mt-4 bg-blue-50 border-blue-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-blue-700 flex items-center">
          <AlertCircle className="w-5 h-5 mr-2" />
          No Changes Detected
        </CardTitle>
        <Button variant="ghost" size="icon" onClick={onClose} className="text-blue-700">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-blue-600">
          Your recent submission did not result in any code changes. The AI returned the same code as before. Please try modifying your prompt or providing more details.
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default NoChangeMessage;