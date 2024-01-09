import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type IProps = {
  children: React.ReactNode;
};

const PublicLayout = ({ children }: IProps) => {
  return (
    <main className="relative flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex-1 mt-24">{children}</div>
      <Footer />
    </main>
  );
};

export default PublicLayout;
