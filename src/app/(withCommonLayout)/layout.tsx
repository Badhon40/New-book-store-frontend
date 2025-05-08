import Header from '@/components/shared/Header';
import React from 'react';

const commonLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <>
            {/* Header */}
            <Header />
         
            
            {
                children
            }
        </>
    );
};

export default commonLayout; 