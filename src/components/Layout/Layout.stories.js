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
