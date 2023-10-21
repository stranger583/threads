import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { fetchUser, fetchUsers } from "@/lib/actions/user.actions";
import UserCard from "@/components/cards/UserCard";

const page = async () => {
    const user = await currentUser()
    if (!user) return null

    const userInfo = await fetchUser(user.id);
    if (!userInfo?.onboarded) redirect("/onboarding");

    const result = await fetchUsers({
        userId:user.id,
        pageNumber:1,
        pageSize:1,
        searchString:""
    })
    return (
        <section>
            <h1 className='head-text mb-10'>Search</h1>
            {result.users.length === 0 ? (
                <p className="no-result">
                    No Users
                </p>
            ):(
            <>
            { result.users.map((person)=>(
                <UserCard
                key={person.id}
                id={person.id}
                name={person.name}
                username={person.username}
                imgUrl={person.imgUrl}
                personType="User" 
                />
            ))

            }
            </>
            )
            }
        </section>
    )
}

export default page
