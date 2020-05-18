import React from 'react'
import TestRenderer from 'react-test-renderer'
// import TextInput from '../text'

test('text input', () => {
    const testRenderer = TestRenderer.create(<div>test</div>)
    const {
        type,
        children: [firstChildren],
    } = testRenderer.toJSON()

    expect(type).toEqual('div')
    expect(firstChildren).toEqual('test')
})
