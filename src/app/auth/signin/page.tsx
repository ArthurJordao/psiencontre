'use client'
import { getProviders, signIn } from "next-auth/react"

export default async function SignIn() {
  const providers = await getProviders() ?? []
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id, { callbackUrl: "/meu-perfil" })}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  )
}
