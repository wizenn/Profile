import React, { useEffect, useState } from 'react';
import CatLoading from './catloading';


const LoadingEnvelope = ({ children }) => {
    const [loading, setLoading] = useState(true);

    return loading
        ? <CatLoading onComplete={() => setLoading(false)} />
        : <>{children}</>;
};

export default LoadingEnvelope;
