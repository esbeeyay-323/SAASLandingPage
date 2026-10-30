import MobileHeader from "../Components/MobileHeader"
import Hero1 from "../../Mocks/assets/goals-product-screen.png"
import { performanceFeatures,workflowSteps } from "../Data/SiteData"
import { Stepper } from "../Components/Stepper"
import { Button } from "antd"


const HomePage = () => {

    return (
        <div data-theme="apex-clarity" className="min-h-screen bg-apex-surface">
            <MobileHeader/>

            <main>
                <section className="relative isolate overflow-hidden px-5 pb-6 pt-14">
                    <div
                        aria-hidden="true"
                        className="absolute -right-20 top-5 -z-10 size-64 rounded-full bg-apex-mint/15 blur-3xl"
                    />

                    <p className="type-eyebrow uppercase mb-5 text-apex-brand">
                        One Connected Platform
                    </p>

                    <h1 className="type-hero max-w-[12ch] text-apex-ink">
                      Every Performance In One Place
                    </h1>

                    <p className="type-lead mt-6 max-w-136 text-apex-copy">
                        Connect goals, reviews, feedback, and develpment in a workflow your 
                        teams cann follow
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <a
                            href="#get-started"
                            className="type-action inline-flex min-h-12 items-center justify-center rounded-[10px] bg-apex-brand px-6 text-white transition-colors hover:bg-apex-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apex-brand"
                        >
                            See the platform
                        </a>
                    </div>
                </section>

                <section className="p-3 w-full">
                        <img
                     alt="ApexPerform dashboard"
                    className=" block w-full rounded-xl
                     border border-[#DCDFF0]
                     shadow-[0_8px_16px_rgba(21,27,64,0.10),0_28px_55px_-12px_rgba(79,61,224,0.22)]" src={Hero1}/>
                </section>


                <section className="bg-white grid mt-6 p-4 grid-cols-1 gap-6 grid-rows-4">
                    {performanceFeatures.map(
                        ({ id, title, description, icon: Icon, color, background }) => (
                        <article
                            key={id}
                            className="flex items-start gap-4 rounded-2xl border border-[#E5E7F0] p-5"
                        >
                            <div
                            className="flex size-12 shrink-0 items-center justify-center rounded-xl"
                            style={{ color, backgroundColor: background }}
                            >
                            <Icon className="text-xl" />
                            </div>

                            <div>
                            <h3 className="type-card-title text-apex-ink">{title}</h3>

                            <p className="type-body mt-2 text-apex-copy">
                                {description}
                            </p>
                            </div>
                        </article>
                        ),
                    )}
                </section>

                <section className="bg-white px-4 py-8">
                     <div className="mx-auto w-full max-w-xl">
                            <h3 className="type-card-title text-apex-ink">A simple workflow, end to end</h3>

                            <p className="mt-1 text-sm font-medium leading-5 text-apex-muted">
                            A connected process from goal setting to development.
                            </p>

                            <Stepper steps={workflowSteps}/>

                               <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                    <a
                                        href="#get-started"
                                        className="type-action inline-flex items-center justify-center rounded-[10px] bg-apex-brand px-6 py-4 text-white transition-colors hover:bg-apex-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apex-brand"
                                    >
                                        See the platform
                                    </a>
                              </div>
                            </div>

                </section>
            </main>
        </div>
    )
}

export default HomePage
