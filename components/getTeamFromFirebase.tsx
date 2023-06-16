"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import firebase_app from "../lib/firebaseConfig"
import { getFirestore, getDocs, collection } from "firebase/firestore"
import TwitterIcon from "./icons/Twitter"
import GithubIcon from "./icons/Github"
import Link from "next/link"

const db = getFirestore(firebase_app)

interface TeamData {
    avatar: string
    github: string
    name: string
    position: string
    twitter: string
}

export default function Team() {
    const [teamData, setTeamData] = useState<TeamData[]>([])

    useEffect(() => {
        async function getTeamData() {
            // create a ref to the collection you want to get data from
            const teamCollectionRef = collection(db, "teammembers")

            // get the data from the collection
            const data = await getDocs(teamCollectionRef)

            const filteredData = (await data.docs.map(doc => ({
                ...doc.data(),
                avatar: doc.data().avatar,
                github: doc.data().github,
                name: doc.data().name,
                position: doc.data().position,
                twitter: doc.data().twitter
            }))) as TeamData[]

            setTeamData(filteredData)
        }

        getTeamData()
    }, [])

    return (
        <div className="w-3/3 sm:w-1/3 mt-6 mb-12">
            {teamData.map((member, index) => (
                <div key={index} className="my-8">
                    <div className="w-full flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center">
                            <Image
                                src={member.avatar}
                                alt={member.name}
                                width={75}
                                height={50}
                                className="rounded-full border border-white"
                                loading="lazy"
                            />
                            <div className="flex flex-col items-start mx-6 justify-start">
                                <h3 className="text-white font-bold text-2xl">{member.name}</h3>
                                <p className="text-gray-300 text-center font-semibold">
                                    {/* 
                                        If the position is longer than 30 characters, slice it and add "..." to the end
                                    */}
                                    {member.position.length > 30
                                        ? member.position.slice(0, 29) + "..."
                                        : member.position}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row justify-end space-x-3 my-3 sm:my-3 items-center">
                            <Link
                                className="text-white"
                                href={member.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <TwitterIcon />
                            </Link>
                            <Link className="text-white" href={member.github} target="_blank" rel="noopener noreferrer">
                                <GithubIcon />
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
