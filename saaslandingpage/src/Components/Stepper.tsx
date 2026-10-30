
type Step = {
    id: number
    title: string
    description: string
}

type StepperProps = {
    steps: Step[]
}

export const Stepper = ({ steps }: StepperProps) => {
    return (
        <ol className="relative mt-5 space-y-3" aria-label="Performance workflow">
            <div
                aria-hidden="true"
                className="absolute bottom-3.5 left-[13px] top-3.5 w-0.5 bg-apex-brand/35"
            />

            {steps.map((step) => (
                <li key={step.id} className="relative grid grid-cols-[28px_1fr] gap-5">
                    <span className="z-10 flex size-7 items-center justify-center rounded-full bg-apex-brand text-xs font-bold text-white shadow-[0_3px_10px_rgba(90,66,232,0.28)]">
                        {step.id}
                    </span>

                    <div className="min-w-0 pb-0.5">
                        <h4 className="font-display text-sm font-semibold leading-5 tracking-[-0.02em] text-apex-ink">
                            {step.title}
                        </h4>
                        <p className="mt-0.5 text-xs font-medium leading-4 text-apex-muted sm:text-sm sm:leading-5">
                            {step.description}
                        </p>
                    </div>
                </li>
            ))}
        </ol>
    )
}

