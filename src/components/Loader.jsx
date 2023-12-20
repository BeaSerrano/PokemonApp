import { Ring } from '@uiball/loaders';

export const Loader = () => {
	return (
        <div className="container-loader">
            <Ring size={40} speed={0.9} color='black' />
        </div>
    )
};
