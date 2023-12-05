
function Login() {
  return (
    <div className="bg-black flex flex-col items-center px-5">
    <div className="flex w-[353px] max-w-full flex-col items-center mt-9 mb-80 max-md:mb-10">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/689d4ee9-07f9-4917-b295-a3803a2c7a44?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/689d4ee9-07f9-4917-b295-a3803a2c7a44?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/689d4ee9-07f9-4917-b295-a3803a2c7a44?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/689d4ee9-07f9-4917-b295-a3803a2c7a44?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/689d4ee9-07f9-4917-b295-a3803a2c7a44?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/689d4ee9-07f9-4917-b295-a3803a2c7a44?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/689d4ee9-07f9-4917-b295-a3803a2c7a44?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/689d4ee9-07f9-4917-b295-a3803a2c7a44?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&"
        className="aspect-[0.84] object-contain object-center w-[67px] overflow-hidden max-w-full"
      />
      <div className="text-white text-center text-4xl font-bold leading-10 whitespace-nowrap mt-24 max-md:mt-10">
        Welcome back
      </div>
      <div className="text-neutral-400 text-xl leading-6 whitespace-nowrap rounded border border-[color:var(--color-border-light,#ACACB1)] self-stretch mt-11 px-4 py-3.5 border-solid max-md:mt-10">
        Email address
      </div>
      <div className="text-white text-center text-xl leading-6 whitespace-nowrap justify-center items-center rounded bg-red-800 self-stretch mt-7 px-5 py-3.5">
        Continue
      </div>
      <div className="items-stretch flex w-[194px] max-w-full gap-4 mt-4">
        <div className="text-neutral-400 text-center text-sm leading-4">
          Don’t have an account?
        </div>
        <div className="text-red-600 text-center text-sm leading-4 whitespace-nowrap self-start">
          Sign up
        </div>
      </div>
      <div className="self-stretch flex items-stretch gap-4 mt-10 max-md:justify-center max-md:mt-10">
        <div className="bg-neutral-700 self-center w-[150px] shrink-0 h-px my-auto" />
        <div className="justify-center text-neutral-700 text-center text-base leading-5">
          OR
        </div>
        <div className="bg-neutral-700 self-center w-[151px] shrink-0 h-px my-auto" />
      </div>
      <div className="items-stretch rounded border border-[color:var(--color-border-light,#ACACB1)] self-stretch flex justify-between gap-3 mt-8 pl-2.5 pr-20 py-2 border-solid max-md:pr-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b644eed-d582-4c33-b11d-a7cf8a157ec5?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&"
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

export default Login