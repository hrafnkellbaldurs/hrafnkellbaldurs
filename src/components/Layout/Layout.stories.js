import React from 'react'
import { storiesOf } from '@storybook/react'
import Layout from './Layout'

storiesOf('Layout|Layout', module)
    .add('With no parameters', () => (
        <Layout siteMetadata={ {
            title: 'SiteTitle',
            description: 'description',
            author: 'John The Great'
        } }>
        </Layout>
    ))
    .add('With children', () => (
        <Layout siteMetadata={ {
            title: 'SiteTitle',
            description: 'description',
            author: 'John The Great'
        } }>
            <div>
                <h1>The best content</h1>
                <p>
                    You've swallowed a planet! It's a fez.
                    I wear a fez now. Fezes are cool. Annihilate?
                    No. No violence. I won't stand for it. Not now, not ever,
                    do you understand me?! I'm the Doctor, the Oncoming Storm - and you basically meant beat
                    them in a football match, didn't you?

                    All I've got to do is pass as an ordinary human being. Simple. What could possibly go wrong? Did I mention we have comfy chairs? I'm the Doctor, I'm worse than everyone's aunt. *catches himself* And that is not how I'm introducing myself.
                    Sorry, checking all the water in this area; there's an escaped fish. I am the last of my species, and I know how that weighs on the heart so don't lie to me! You hate me; you want to kill me! Well, go on! Kill me! KILL ME!
                    Stop talking, brain thinking. Hush. Saving the world with meals on wheels. I am the Doctor, and you are the Daleks! Saving the world with meals on wheels. Heh-haa! Super squeaky bum time!
                    Did I mention we have comfy chairs? Heh-haa! Super squeaky bum time! Saving the world with meals on wheels. I am the last of my species, and I know how that weighs on the heart so don't lie to me! I'm the Doctor, I'm worse than everyone's aunt. *catches himself* And that is not how I'm introducing myself.
                </p>
            </div>
        </Layout>
    ))
    .add('With styled children', () => (
        <Layout siteMetadata={ {
            title: 'SiteTitle',
            description: 'description',
            author: 'John The Great'
        } }>
            <div style={ { padding: '20px 25%' } }>
                <h1>The best content</h1>
                <p>
                    You've swallowed a planet! It's a fez.
                    I wear a fez now. Fezes are cool. Annihilate?
                    No. No violence. I won't stand for it. Not now, not ever,
                    do you understand me?! I'm the Doctor, the Oncoming Storm - and you basically meant beat
                    them in a football match, didn't you?

                    All I've got to do is pass as an ordinary human being. Simple. What could possibly go wrong? Did I mention we have comfy chairs? I'm the Doctor, I'm worse than everyone's aunt. *catches himself* And that is not how I'm introducing myself.
                    Sorry, checking all the water in this area; there's an escaped fish. I am the last of my species, and I know how that weighs on the heart so don't lie to me! You hate me; you want to kill me! Well, go on! Kill me! KILL ME!
                    Stop talking, brain thinking. Hush. Saving the world with meals on wheels. I am the Doctor, and you are the Daleks! Saving the world with meals on wheels. Heh-haa! Super squeaky bum time!
                    Did I mention we have comfy chairs? Heh-haa! Super squeaky bum time! Saving the world with meals on wheels. I am the last of my species, and I know how that weighs on the heart so don't lie to me! I'm the Doctor, I'm worse than everyone's aunt. *catches himself* And that is not how I'm introducing myself.
                </p>
            </div>
        </Layout>
    ))
    .add('With styled children and header navitems', () => (
        <Layout
            siteMetadata={ {
                title: 'SiteTitle',
                description: 'description',
                author: 'John The Great'
            } }
            navItems={ [
                {
                    id: 'home',
                    href: '/#home',
                    text: 'Home'
                },
                {
                    id: 'blog',
                    href: '/#blog',
                    text: 'Blog'
                },
                {
                    id: 'about',
                    href: '/#about',
                    text: 'about'
                },
            ] }
        >
            <div style={ { padding: '20px 25%' } }>
                <h1>The best content</h1>
                <p>
                    You've swallowed a planet! It's a fez.
                    I wear a fez now. Fezes are cool. Annihilate?
                    No. No violence. I won't stand for it. Not now, not ever,
                    do you understand me?! I'm the Doctor, the Oncoming Storm - and you basically meant beat
                    them in a football match, didn't you?

                    All I've got to do is pass as an ordinary human being. Simple. What could possibly go wrong? Did I mention we have comfy chairs? I'm the Doctor, I'm worse than everyone's aunt. *catches himself* And that is not how I'm introducing myself.
                    Sorry, checking all the water in this area; there's an escaped fish. I am the last of my species, and I know how that weighs on the heart so don't lie to me! You hate me; you want to kill me! Well, go on! Kill me! KILL ME!
                    Stop talking, brain thinking. Hush. Saving the world with meals on wheels. I am the Doctor, and you are the Daleks! Saving the world with meals on wheels. Heh-haa! Super squeaky bum time!
                    Did I mention we have comfy chairs? Heh-haa! Super squeaky bum time! Saving the world with meals on wheels. I am the last of my species, and I know how that weighs on the heart so don't lie to me! I'm the Doctor, I'm worse than everyone's aunt. *catches himself* And that is not how I'm introducing myself.
                </p>
                <p>
                    The THX microchip is down, index the virtual transmitter so we can program the USB pixel!
                    Facere ipsa reprehenderit eaque asperiores minima incidunt. Laudantium vel et fuga laboriosam non repellendus. Tempore tempora minus.
                    In officia quia expedita dolores eos aut eum. Et eum praesentium laudantium enim distinctio. Id nihil iure perspiciatis dolores sit iure magni consequatur quo. Ipsam vero repudiandae corrupti quis nisi esse aspernatur aut possimus. Nemo distinctio corporis qui eius officia atque.
                    Est fugiat ex laborum dolore omnis vero ut rerum. Commodi quis hic error nobis et sequi. Itaque amet eaque reiciendis repudiandae enim at non qui omnis. Quia qui et eos molestiae at aut labore. Qui deserunt libero. Nam odio nisi et facilis.
                </p>
                <p>
                    Molestiae eaque voluptate aliquid explicabo eos dignissimos id. Blanditiis rerum neque error et voluptate accusamus. Minima vel voluptas nihil omnis deleniti sint harum.
                    Voluptatem voluptatibus at illum a. Est non aut similique eum rerum ut qui molestiae. Ut incidunt iste ullam rerum harum qui.
                    Quia autem et adipisci facere architecto. Sint fugiat ex voluptatem. Nostrum consequatur corrupti ut autem quo. Temporibus porro ut praesentium magni voluptatem.
                </p>
            </div>
        </Layout>
    ))
