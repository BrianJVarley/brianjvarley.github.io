
    export type RemoteKeys = 'REMOTE_ALIAS_IDENTIFIER/ProjectsPage';
    type PackageType<T> = T extends 'REMOTE_ALIAS_IDENTIFIER/ProjectsPage' ? typeof import('REMOTE_ALIAS_IDENTIFIER/ProjectsPage') :any;