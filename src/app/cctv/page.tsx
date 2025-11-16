import { CctvHeader } from "@/components/cctv/cctv-header";

export default function CctvPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="sticky top-0 z-10">
        <CctvHeader />
      </div>
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
        {/* Camera feeds will go here */}
      </div>
    </div>
  );
}
