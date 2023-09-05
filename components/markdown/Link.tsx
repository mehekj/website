export default function Link(props: React.HTMLProps<HTMLAnchorElement>) {
    return (
        <a {...props} className="link" target="_blank">
            {props.children}
        </a>
    );
}
