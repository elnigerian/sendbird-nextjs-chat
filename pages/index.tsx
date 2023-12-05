import * as React from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import {navigation} from '../components/layout/navigation/navConstants';
import {XMarkIcon} from '@heroicons/react/24/outline';
import {classNames} from '../components/layout/utils';
import NavHome from "../components/layout/navigation/navHome";
import NavBar from '../components/layout/navigation/navBar';
import HomeHeader from '../components/layout/header';
import SendbirdContainer from "../components/sendbird/sendbirdContainer";
import dynamic from 'next/dynamic';
import LayoutNavContainer from "../components/layout/layoutNavContainer";


const DynamicAppWithNoSSR = dynamic(() => import("../components/sendbird/sendbirdContainer"), {
    ssr: false,
    loading: () => <p>...</p>
});

export default function Home() {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    return (
        <>
            <HomeHeader />
            <div className='mx-auto'>
                <Transition.Root show={sidebarOpen} as={React.Fragment}>
                    <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={React.Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-900/80" />
                        </Transition.Child>

                        <div className="fixed inset-0 flex">
                            <Transition.Child
                                as={React.Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                                    <Transition.Child
                                        as={React.Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                                            <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                                                <span className="sr-only">Close sidebar</span>
                                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>

                                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                                        <div className="flex h-16 shrink-0 items-center">
                                            <img
                                                className="h-8 w-auto"
                                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                                alt="Your Company"
                                            />
                                        </div>
                                        <nav className="flex flex-1 flex-col">
                                            <ul role="list" className="-mx-2 flex-1 space-y-1">
                                                {navigation.map((item) => (
                                                    <li key={item.name}>
                                                        <a
                                                            href={item.href}
                                                            className={classNames(
                                                                item.current
                                                                    ? 'bg-gray-800 text-white'
                                                                    : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                                                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                            )}
                                                        >
                                                            <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                                            {item.name}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </nav>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>
                <NavHome />
                <div className="lg:pl-20">
                    <NavBar sidebarStatus={sidebarOpen} updateSideBarStatus={setSidebarOpen}/>
                    <LayoutNavContainer>
                        <SendbirdContainer />
                    </LayoutNavContainer>
                </div>

            </div>
        </>
    );
}
