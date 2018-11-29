export default function spyConsole() {
    // https://github.com/facebook/react/issues/7047
    let spy = {}

    beforeAll(() => {
        spy.console = jest.spyOn(console, 'error').mockImplementation(() => {})
    })

    afterAll(() => {
        spy.console.mockRestore()
    })

    return spy
}
