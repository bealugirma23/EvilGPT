
function Signup() {
  return (
    <div className="bg-black flex flex-col items-center px-5">
    <div className="flex w-[375px] max-w-full flex-col mt-9 mb-60 max-md:mb-10">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4154a0c6-03d8-4326-8c94-7f81d4f68daa?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4154a0c6-03d8-4326-8c94-7f81d4f68daa?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4154a0c6-03d8-4326-8c94-7f81d4f68daa?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4154a0c6-03d8-4326-8c94-7f81d4f68daa?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4154a0c6-03d8-4326-8c94-7f81d4f68daa?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4154a0c6-03d8-4326-8c94-7f81d4f68daa?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4154a0c6-03d8-4326-8c94-7f81d4f68daa?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4154a0c6-03d8-4326-8c94-7f81d4f68daa?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&"
        className="aspect-[0.7] object-contain object-center w-[68px] overflow-hidden self-center max-w-full"
      />
      <div className="text-white text-center text-4xl font-bold leading-10 self-stretch whitespace-nowrap mt-24 max-md:mt-10">
        Create your account
      </div>
      <div className="text-neutral-400 text-xl leading-6 whitespace-nowrap rounded border border-[color:var(--color-border-light,#ACACB1)] self-center w-[352px] max-w-full mt-12 px-4 py-3.5 border-solid max-md:mt-10">
        Email address
      </div>
      <div className="text-neutral-400 text-xl leading-6 whitespace-nowrap rounded border border-[color:var(--color-border-light,#ACACB1)] self-center w-[352px] max-w-full mt-3.5 px-4 py-3.5 border-solid">
        Email address
      </div>
      <div className="text-white text-center text-xl leading-6 whitespace-nowrap justify-center items-center rounded bg-red-800 self-center w-[352px] max-w-full mt-7 px-5 py-3.5">
        Continue
      </div>
      <div className="items-stretch self-center flex w-[204px] max-w-full gap-5 mt-4">
        <div className="text-neutral-400 text-center text-sm leading-4">
          Already have an account?
        </div>
        <div className="text-red-800 text-center text-sm leading-4 whitespace-nowrap self-start">
          Log in
        </div>
      </div>
      <div className="self-center flex w-[352px] max-w-full items-stretch gap-4 mt-10 max-md:justify-center max-md:mt-10">
        <div className="bg-neutral-700 self-center w-[150px] shrink-0 h-px my-auto" />
        <div className="justify-center text-neutral-700 text-center text-base leading-5">
          OR
        </div>
        <div className="bg-neutral-700 self-center w-[150px] shrink-0 h-px my-auto" />
      </div>
      <div className="items-stretch rounded border border-[color:var(--color-border-light,#ACACB1)] self-center flex w-[352px] max-w-full gap-3 mt-8 pl-2.5 pr-20 py-2 border-solid max-md:pr-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/725e3d33-ab4e-41fc-84bd-02f59cd8d9ab?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&"
          className="aspect-square object-contain object-center w-9 overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-neutral-400 text-base leading-5 self-center grow whitespace-nowrap my-auto">
          Continue with Google
        </div>
      </div>
    </div>
  </div>
  )
}

export default Signup