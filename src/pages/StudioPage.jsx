import React from 'react'
import { Studio } from 'sanity'
import config from '../../sanity.config'

export default function StudioPage() {
    return (
        <div style={{ height: '100vh', zIndex: 9999, position: 'relative' }}>
            <Studio config={config} />
        </div>
    )
}
