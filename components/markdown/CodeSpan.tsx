export default function CodeSpan({ children }: { children?: React.ReactNode }) {
    return (
        <span className="rounded bg-highlight px-1">
            <code>{children}</code>
        </span>
    );
}
