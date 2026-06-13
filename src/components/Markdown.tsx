import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownProps = {
  children: string;
  className?: string;
};

/**
 * Renders GitHub-flavored Markdown with Tailwind Typography (`prose`).
 */
export function Markdown({ children, className = "" }: MarkdownProps) {
  return (
    <div
      className={[
        "prose prose-slate max-w-none prose-headings:scroll-mt-24 prose-headings:font-semibold prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600 prose-a:text-violet-700 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 prose-code:rounded prose-code:bg-slate-100 prose-code:px-1 prose-code:py-0.5 prose-code:text-slate-800 prose-pre:bg-slate-900 prose-pre:text-slate-100",
        className,
      ].join(" ")}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
    </div>
  );
}
