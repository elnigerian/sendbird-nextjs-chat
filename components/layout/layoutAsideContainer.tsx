import * as React from 'react';

const LayoutAsideContainer = ({children}: any) => {
    return (
        <React.Fragment>
            <aside className="fixed bottom-0 left-20 top-16 hidden w-96 overflow-y-auto border-r border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block">
                {/* Secondary column (hidden on smaller screens) */}
                <div>
                    {children}
                </div>
            </aside>
        </React.Fragment>
    );
}

export default LayoutAsideContainer;