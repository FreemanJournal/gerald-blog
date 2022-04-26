import HeroBanner from '../../components/Header/HeroBanner'
import Feed from '../../components/UserFeed/Feed'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Profile() {

    return (
        <>
            <HeroBanner />
            <div className="container">
                <Feed/>
            </div>
        </>
    )
}
