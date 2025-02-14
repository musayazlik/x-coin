const Stats = () => {
  return (
    <section className={"bg-zinc-950 py-10 lg:py-28"}>
      <div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl
            className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-300">Transactions
                every
                24 hours
              </dt>
              <dd
                className="order-first text-3xl font-semibold tracking-tight text-blue-600 sm:text-5xl">44
                million
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-300">Assets under
                holding
              </dt>
              <dd
                className="order-first text-3xl font-semibold tracking-tight text-blue-600 sm:text-5xl">$119
                trillion
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-300">New users
                annually
              </dt>
              <dd
                className="order-first text-3xl font-semibold tracking-tight text-blue-600 sm:text-5xl">46,000
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

export default Stats