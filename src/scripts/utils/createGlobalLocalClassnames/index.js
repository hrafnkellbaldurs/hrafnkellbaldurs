import toKeyValue from '../toKeyValue'

export default function createGlobalLocalClassnames(key, styles) {
    const { key: globalClassname, value: localClassname } = toKeyValue(key, styles)
    return [localClassname, globalClassname]
}
