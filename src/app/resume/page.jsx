import PdfViewer from "@/components/PdfViewer";
const Page = () => {
  return (
    <>
      <PdfViewer url={"/resume/main.pdf"} />
    </>
  );
};
export default Page;
