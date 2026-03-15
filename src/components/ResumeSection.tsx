import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Background blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Resume</h2>
          <p className="text-muted-foreground text-lg">
            View or download my complete resume
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl shadow-lg overflow-hidden border border-border"
        >
          <div className="p-6 border-b border-border flex justify-between items-center">
            <h3 className="text-xl font-semibold">Mia Zuo - Resume</h3>
            <Button asChild variant="default">
              <a href="/Mia_Zuo_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                View PDF
              </a>
            </Button>
          </div>
          
          <div className="bg-muted/30 p-4">
            <iframe
              src="/Mia_Zuo_Resume.pdf"
              title="Mia Zuo Resume"
              className="w-full bg-background rounded-lg shadow-inner"
              style={{ height: "85vh", minHeight: "600px" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
