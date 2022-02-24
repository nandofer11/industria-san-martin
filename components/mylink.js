import Link from "next/link"

export default function MyLink({href, children, ...rest}) {
    //let { href, children, ...rest } = props


    return (
        <Link href={href} scroll={false}>
            <a {...rest}>{children}</a>
        </Link>
    )
}