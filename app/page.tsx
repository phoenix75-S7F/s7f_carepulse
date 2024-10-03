"use client";
import Image from "next/image";
import Link from "next/link";
import ReactFlagsSelect from "react-flags-select";

import PatientForm from "@/components/forms/PatientForm";
import PasskeyModal from "@/components/PasskeyModal";
import { useState } from "react";

export default function Home({ searchParams }: SearchParamProps) {
  const isAdmin = searchParams.admin === "true";
  const [selected, setSelected] = useState("false");
 

  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}

      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px]">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="h-10 w-fit"
          />

          <div className="mb-10 flex flex-col -mt-9 ml-auto">
            <ReactFlagsSelect            
              selected={selected}
              onSelect={(code) => setSelected(code)}   
              countries={["US", "GB", "FR", "DE", "IT", "BR", "ES" ]}
              customLabels={{ US: "USA", GB: "ENGLAND", FR: "FRANCE", DE: "DEUTSCH", IT: "ITALY", BR: "BRAZIL", ES: "SPAIN" }}
              placeholder=""         
              selectedSize={10}  // tamanho do select
              optionsSize={14} // tamanho bandeira                           
            />
          </div>  
         
          
          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 CarePulse
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
