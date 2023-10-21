import Link from "next/link";
import Image from "next/image";

interface Props {
    id: string,
    currentUserId?: string,
    parentId: string | null,
    content: string,
    author: I_Author,
    community: I_Community | null,
    createdAt: string,
    comments: I_Comments[],
    isComment?: boolean;
}

interface I_Author {
    name: string,
    id: string,
    image: string
}

interface I_Community {
    name: string,
    id: string,
    image: string
}

interface I_Comments {
    author: {
        image: string
    }
}
const ThreadCard = ({
    id,
    currentUserId,
    parentId,
    content,
    author,
    community,
    createdAt,
    comments,
    isComment
}: Props) => {
    return (
        <article className={`flex w-full flex-col rounded-xl ${isComment ? "px-0 xs:px-7" : "bg-dark-2 p-7"}`}>
            <div className="flex justify-between items-center">
                <div className="flex w-full flex-1 flex-row gap-4">
                    <div className="flex flex-col items-center">
                        <Link
                            href={`profile/${author.id}`}
                            className="relative h-11 w-11"
                        >
                            <Image
                                src={author.image}
                                alt={"profile Image"}
                                fill
                                className={"cursor-pointer rounded-full"}
                            />
                        </Link>
                        <div className="thread-card_bar" />
                    </div>
                    <div className="flex flex-col items-start">
                        <Link
                            href={`profile/${author.id}`}
                            className="w-fit"
                        >
                            <h4 className="cursor-pointer text-base-semibold text-light-1">{author.name}</h4>
                        </Link>
                        <p className="mt-2 text-small-regular text-light-2">{content}</p>
                        <div className={`${isComment && "mb-5"} mt-5 flex flex-col gap-3`}>
                            <div className="flex gap-3.5">
                                <Image
                                    src='/assets/heart-gray.svg'
                                    alt='heart'
                                    width={24}
                                    height={24}
                                    className='cursor-pointer object-contain'
                                />
                                <Link href={`/thread/${id}`}>
                                    <Image
                                        src='/assets/reply.svg'
                                        alt='heart'
                                        width={24}
                                        height={24}
                                        className='cursor-pointer object-contain'
                                    />
                                </Link>
                                <Image
                                    src='/assets/repost.svg'
                                    alt='heart'
                                    width={24}
                                    height={24}
                                    className='cursor-pointer object-contain'
                                />
                                <Image
                                    src='/assets/share.svg'
                                    alt='heart'
                                    width={24}
                                    height={24}
                                    className='cursor-pointer object-contain'
                                />
                            </div>
                            {
                                isComment && comments.length > 0 && (
                                    <Link href={`/thread/${id}`}>
                                        <p className="mt-1 text-subtle-medium text-gray-1">
                                            {comments.length} replies
                                        </p>
                                    </Link>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ThreadCard