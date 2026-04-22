
    export type RemoteKeys = 'REMOTE_ALIAS_IDENTIFIER/AboutPage';
    type PackageType<T> = T extends 'REMOTE_ALIAS_IDENTIFIER/AboutPage' ? typeof import('REMOTE_ALIAS_IDENTIFIER/AboutPage') :any;