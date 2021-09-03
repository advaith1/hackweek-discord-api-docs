import Header from "../Header";

interface ContentWrapperProps {
  children: React.ReactNode;
}

export default function ContentWrapper({ children }: ContentWrapperProps) {
  return (
    <div className="scroll-padding relative flex flex-1 flex-col items-center focus:outline-none overflow-y-auto">
      <Header />
      <main className="pt-4 px-4 w-full max-w-6xl sm:pt-0 sm:px-6 lg:px-10">
        <article className="m-auto">{children}</article>
      </main>
    </div>
  );
}
