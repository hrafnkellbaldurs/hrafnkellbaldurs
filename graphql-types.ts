export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
};










export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type SkillsJson */
  childrenSkillsJson?: Maybe<Array<Maybe<SkillsJson>>>;
  /** Returns the first child node of type SkillsJson or null if there are no children of given type on this node */
  childSkillsJson?: Maybe<SkillsJson>;
  /** Returns all children nodes filtered by type ShowcasesJson */
  childrenShowcasesJson?: Maybe<Array<Maybe<ShowcasesJson>>>;
  /** Returns the first child node of type ShowcasesJson or null if there are no children of given type on this node */
  childShowcasesJson?: Maybe<ShowcasesJson>;
  /** Returns all children nodes filtered by type ExperienceJson */
  childrenExperienceJson?: Maybe<Array<Maybe<ExperienceJson>>>;
  /** Returns the first child node of type ExperienceJson or null if there are no children of given type on this node */
  childExperienceJson?: Maybe<ExperienceJson>;
  /** Returns all children nodes filtered by type AboutMeJson */
  childrenAboutMeJson?: Maybe<Array<Maybe<AboutMeJson>>>;
  /** Returns the first child node of type AboutMeJson or null if there are no children of given type on this node */
  childAboutMeJson?: Maybe<AboutMeJson>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};


export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  flags?: Maybe<SiteFlags>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteFlags = {
  FAST_DEV?: Maybe<Scalars['Boolean']>;
  PRESERVE_WEBPACK_CACHE?: Maybe<Scalars['Boolean']>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
};

export type SkillsJson = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  logo?: Maybe<File>;
  rating?: Maybe<Scalars['Int']>;
  skillLevel?: Maybe<Scalars['Int']>;
  link?: Maybe<Scalars['String']>;
};


export type SkillsJsonStartDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SkillsJsonEndDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginPluginOptions = {
  name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  crossOrigin?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  implementation?: Maybe<SitePluginPluginOptionsImplementation>;
  path?: Maybe<Scalars['String']>;
  svgProps?: Maybe<SitePluginPluginOptionsSvgProps>;
  headers?: Maybe<SitePluginPluginOptionsHeaders>;
  pathCheck?: Maybe<Scalars['Boolean']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsImplementation = {
  info?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSvgProps = {
  className?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsHeaders = {
  _x?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ShowcasesJson = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  image?: Maybe<File>;
  authors?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  sourceCodeLink?: Maybe<Scalars['String']>;
  internalLink?: Maybe<File>;
};

export type ExperienceJson = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  dataId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  logo?: Maybe<File>;
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
};


export type ExperienceJsonStartDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ExperienceJsonEndDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type AboutMeJson = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  dataId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  urls?: Maybe<AboutMeJsonUrls>;
  contactDetails?: Maybe<AboutMeJsonContactDetails>;
  downloadResumeLabel?: Maybe<Scalars['String']>;
  contactLabel?: Maybe<Scalars['String']>;
};

export type AboutMeJsonUrls = {
  gravatar?: Maybe<Scalars['String']>;
  portfolioPdf?: Maybe<File>;
};

export type AboutMeJsonContactDetails = {
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  skillsJson?: Maybe<SkillsJson>;
  allSkillsJson: SkillsJsonConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  showcasesJson?: Maybe<ShowcasesJson>;
  allShowcasesJson: ShowcasesJsonConnection;
  experienceJson?: Maybe<ExperienceJson>;
  allExperienceJson: ExperienceJsonConnection;
  aboutMeJson?: Maybe<AboutMeJson>;
  allAboutMeJson: AboutMeJsonConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenSkillsJson?: Maybe<SkillsJsonFilterListInput>;
  childSkillsJson?: Maybe<SkillsJsonFilterInput>;
  childrenShowcasesJson?: Maybe<ShowcasesJsonFilterListInput>;
  childShowcasesJson?: Maybe<ShowcasesJsonFilterInput>;
  childrenExperienceJson?: Maybe<ExperienceJsonFilterListInput>;
  childExperienceJson?: Maybe<ExperienceJsonFilterInput>;
  childrenAboutMeJson?: Maybe<AboutMeJsonFilterListInput>;
  childAboutMeJson?: Maybe<AboutMeJsonFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  flags?: Maybe<SiteFlagsFilterInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: Maybe<StringQueryOperatorInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: Maybe<SiteFunctionFilterInput>;
  sort?: Maybe<SiteFunctionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySkillsJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  shortName?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  startDate?: Maybe<DateQueryOperatorInput>;
  endDate?: Maybe<DateQueryOperatorInput>;
  logo?: Maybe<FileFilterInput>;
  rating?: Maybe<IntQueryOperatorInput>;
  skillLevel?: Maybe<IntQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSkillsJsonArgs = {
  filter?: Maybe<SkillsJsonFilterInput>;
  sort?: Maybe<SkillsJsonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryShowcasesJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<FileFilterInput>;
  authors?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  sourceCodeLink?: Maybe<StringQueryOperatorInput>;
  internalLink?: Maybe<FileFilterInput>;
};


export type QueryAllShowcasesJsonArgs = {
  filter?: Maybe<ShowcasesJsonFilterInput>;
  sort?: Maybe<ShowcasesJsonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryExperienceJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  dataId?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  logo?: Maybe<FileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
  startDate?: Maybe<DateQueryOperatorInput>;
  endDate?: Maybe<DateQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllExperienceJsonArgs = {
  filter?: Maybe<ExperienceJsonFilterInput>;
  sort?: Maybe<ExperienceJsonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryAboutMeJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  dataId?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  shortDescription?: Maybe<StringQueryOperatorInput>;
  urls?: Maybe<AboutMeJsonUrlsFilterInput>;
  contactDetails?: Maybe<AboutMeJsonContactDetailsFilterInput>;
  downloadResumeLabel?: Maybe<StringQueryOperatorInput>;
  contactLabel?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllAboutMeJsonArgs = {
  filter?: Maybe<AboutMeJsonFilterInput>;
  sort?: Maybe<AboutMeJsonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type SkillsJsonFilterListInput = {
  elemMatch?: Maybe<SkillsJsonFilterInput>;
};

export type SkillsJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  shortName?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  startDate?: Maybe<DateQueryOperatorInput>;
  endDate?: Maybe<DateQueryOperatorInput>;
  logo?: Maybe<FileFilterInput>;
  rating?: Maybe<IntQueryOperatorInput>;
  skillLevel?: Maybe<IntQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenSkillsJson?: Maybe<SkillsJsonFilterListInput>;
  childSkillsJson?: Maybe<SkillsJsonFilterInput>;
  childrenShowcasesJson?: Maybe<ShowcasesJsonFilterListInput>;
  childShowcasesJson?: Maybe<ShowcasesJsonFilterInput>;
  childrenExperienceJson?: Maybe<ExperienceJsonFilterListInput>;
  childExperienceJson?: Maybe<ExperienceJsonFilterInput>;
  childrenAboutMeJson?: Maybe<AboutMeJsonFilterListInput>;
  childAboutMeJson?: Maybe<AboutMeJsonFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ShowcasesJsonFilterListInput = {
  elemMatch?: Maybe<ShowcasesJsonFilterInput>;
};

export type ShowcasesJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<FileFilterInput>;
  authors?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  sourceCodeLink?: Maybe<StringQueryOperatorInput>;
  internalLink?: Maybe<FileFilterInput>;
};

export type ExperienceJsonFilterListInput = {
  elemMatch?: Maybe<ExperienceJsonFilterInput>;
};

export type ExperienceJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  dataId?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  logo?: Maybe<FileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
  startDate?: Maybe<DateQueryOperatorInput>;
  endDate?: Maybe<DateQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type AboutMeJsonFilterListInput = {
  elemMatch?: Maybe<AboutMeJsonFilterInput>;
};

export type AboutMeJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  dataId?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  shortDescription?: Maybe<StringQueryOperatorInput>;
  urls?: Maybe<AboutMeJsonUrlsFilterInput>;
  contactDetails?: Maybe<AboutMeJsonContactDetailsFilterInput>;
  downloadResumeLabel?: Maybe<StringQueryOperatorInput>;
  contactLabel?: Maybe<StringQueryOperatorInput>;
};

export type AboutMeJsonUrlsFilterInput = {
  gravatar?: Maybe<StringQueryOperatorInput>;
  portfolioPdf?: Maybe<FileFilterInput>;
};

export type AboutMeJsonContactDetailsFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  zip?: Maybe<StringQueryOperatorInput>;
  city?: Maybe<StringQueryOperatorInput>;
  country?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenSkillsJson'
  | 'childrenSkillsJson___id'
  | 'childrenSkillsJson___parent___id'
  | 'childrenSkillsJson___parent___parent___id'
  | 'childrenSkillsJson___parent___parent___children'
  | 'childrenSkillsJson___parent___children'
  | 'childrenSkillsJson___parent___children___id'
  | 'childrenSkillsJson___parent___children___children'
  | 'childrenSkillsJson___parent___internal___content'
  | 'childrenSkillsJson___parent___internal___contentDigest'
  | 'childrenSkillsJson___parent___internal___description'
  | 'childrenSkillsJson___parent___internal___fieldOwners'
  | 'childrenSkillsJson___parent___internal___ignoreType'
  | 'childrenSkillsJson___parent___internal___mediaType'
  | 'childrenSkillsJson___parent___internal___owner'
  | 'childrenSkillsJson___parent___internal___type'
  | 'childrenSkillsJson___children'
  | 'childrenSkillsJson___children___id'
  | 'childrenSkillsJson___children___parent___id'
  | 'childrenSkillsJson___children___parent___children'
  | 'childrenSkillsJson___children___children'
  | 'childrenSkillsJson___children___children___id'
  | 'childrenSkillsJson___children___children___children'
  | 'childrenSkillsJson___children___internal___content'
  | 'childrenSkillsJson___children___internal___contentDigest'
  | 'childrenSkillsJson___children___internal___description'
  | 'childrenSkillsJson___children___internal___fieldOwners'
  | 'childrenSkillsJson___children___internal___ignoreType'
  | 'childrenSkillsJson___children___internal___mediaType'
  | 'childrenSkillsJson___children___internal___owner'
  | 'childrenSkillsJson___children___internal___type'
  | 'childrenSkillsJson___internal___content'
  | 'childrenSkillsJson___internal___contentDigest'
  | 'childrenSkillsJson___internal___description'
  | 'childrenSkillsJson___internal___fieldOwners'
  | 'childrenSkillsJson___internal___ignoreType'
  | 'childrenSkillsJson___internal___mediaType'
  | 'childrenSkillsJson___internal___owner'
  | 'childrenSkillsJson___internal___type'
  | 'childrenSkillsJson___name'
  | 'childrenSkillsJson___shortName'
  | 'childrenSkillsJson___type'
  | 'childrenSkillsJson___description'
  | 'childrenSkillsJson___startDate'
  | 'childrenSkillsJson___endDate'
  | 'childrenSkillsJson___logo___sourceInstanceName'
  | 'childrenSkillsJson___logo___absolutePath'
  | 'childrenSkillsJson___logo___relativePath'
  | 'childrenSkillsJson___logo___extension'
  | 'childrenSkillsJson___logo___size'
  | 'childrenSkillsJson___logo___prettySize'
  | 'childrenSkillsJson___logo___modifiedTime'
  | 'childrenSkillsJson___logo___accessTime'
  | 'childrenSkillsJson___logo___changeTime'
  | 'childrenSkillsJson___logo___birthTime'
  | 'childrenSkillsJson___logo___root'
  | 'childrenSkillsJson___logo___dir'
  | 'childrenSkillsJson___logo___base'
  | 'childrenSkillsJson___logo___ext'
  | 'childrenSkillsJson___logo___name'
  | 'childrenSkillsJson___logo___relativeDirectory'
  | 'childrenSkillsJson___logo___dev'
  | 'childrenSkillsJson___logo___mode'
  | 'childrenSkillsJson___logo___nlink'
  | 'childrenSkillsJson___logo___uid'
  | 'childrenSkillsJson___logo___gid'
  | 'childrenSkillsJson___logo___rdev'
  | 'childrenSkillsJson___logo___ino'
  | 'childrenSkillsJson___logo___atimeMs'
  | 'childrenSkillsJson___logo___mtimeMs'
  | 'childrenSkillsJson___logo___ctimeMs'
  | 'childrenSkillsJson___logo___atime'
  | 'childrenSkillsJson___logo___mtime'
  | 'childrenSkillsJson___logo___ctime'
  | 'childrenSkillsJson___logo___birthtime'
  | 'childrenSkillsJson___logo___birthtimeMs'
  | 'childrenSkillsJson___logo___blksize'
  | 'childrenSkillsJson___logo___blocks'
  | 'childrenSkillsJson___logo___publicURL'
  | 'childrenSkillsJson___logo___childrenSkillsJson'
  | 'childrenSkillsJson___logo___childrenSkillsJson___id'
  | 'childrenSkillsJson___logo___childrenSkillsJson___children'
  | 'childrenSkillsJson___logo___childrenSkillsJson___name'
  | 'childrenSkillsJson___logo___childrenSkillsJson___shortName'
  | 'childrenSkillsJson___logo___childrenSkillsJson___type'
  | 'childrenSkillsJson___logo___childrenSkillsJson___description'
  | 'childrenSkillsJson___logo___childrenSkillsJson___startDate'
  | 'childrenSkillsJson___logo___childrenSkillsJson___endDate'
  | 'childrenSkillsJson___logo___childrenSkillsJson___rating'
  | 'childrenSkillsJson___logo___childrenSkillsJson___skillLevel'
  | 'childrenSkillsJson___logo___childrenSkillsJson___link'
  | 'childrenSkillsJson___logo___childSkillsJson___id'
  | 'childrenSkillsJson___logo___childSkillsJson___children'
  | 'childrenSkillsJson___logo___childSkillsJson___name'
  | 'childrenSkillsJson___logo___childSkillsJson___shortName'
  | 'childrenSkillsJson___logo___childSkillsJson___type'
  | 'childrenSkillsJson___logo___childSkillsJson___description'
  | 'childrenSkillsJson___logo___childSkillsJson___startDate'
  | 'childrenSkillsJson___logo___childSkillsJson___endDate'
  | 'childrenSkillsJson___logo___childSkillsJson___rating'
  | 'childrenSkillsJson___logo___childSkillsJson___skillLevel'
  | 'childrenSkillsJson___logo___childSkillsJson___link'
  | 'childrenSkillsJson___logo___childrenShowcasesJson'
  | 'childrenSkillsJson___logo___childrenShowcasesJson___id'
  | 'childrenSkillsJson___logo___childrenShowcasesJson___children'
  | 'childrenSkillsJson___logo___childrenShowcasesJson___title'
  | 'childrenSkillsJson___logo___childrenShowcasesJson___type'
  | 'childrenSkillsJson___logo___childrenShowcasesJson___subtitle'
  | 'childrenSkillsJson___logo___childrenShowcasesJson___authors'
  | 'childrenSkillsJson___logo___childrenShowcasesJson___tags'
  | 'childrenSkillsJson___logo___childrenShowcasesJson___description'
  | 'childrenSkillsJson___logo___childrenShowcasesJson___link'
  | 'childrenSkillsJson___logo___childrenShowcasesJson___sourceCodeLink'
  | 'childrenSkillsJson___logo___childShowcasesJson___id'
  | 'childrenSkillsJson___logo___childShowcasesJson___children'
  | 'childrenSkillsJson___logo___childShowcasesJson___title'
  | 'childrenSkillsJson___logo___childShowcasesJson___type'
  | 'childrenSkillsJson___logo___childShowcasesJson___subtitle'
  | 'childrenSkillsJson___logo___childShowcasesJson___authors'
  | 'childrenSkillsJson___logo___childShowcasesJson___tags'
  | 'childrenSkillsJson___logo___childShowcasesJson___description'
  | 'childrenSkillsJson___logo___childShowcasesJson___link'
  | 'childrenSkillsJson___logo___childShowcasesJson___sourceCodeLink'
  | 'childrenSkillsJson___logo___childrenExperienceJson'
  | 'childrenSkillsJson___logo___childrenExperienceJson___id'
  | 'childrenSkillsJson___logo___childrenExperienceJson___children'
  | 'childrenSkillsJson___logo___childrenExperienceJson___dataId'
  | 'childrenSkillsJson___logo___childrenExperienceJson___type'
  | 'childrenSkillsJson___logo___childrenExperienceJson___title'
  | 'childrenSkillsJson___logo___childrenExperienceJson___subtitle'
  | 'childrenSkillsJson___logo___childrenExperienceJson___startDate'
  | 'childrenSkillsJson___logo___childrenExperienceJson___endDate'
  | 'childrenSkillsJson___logo___childrenExperienceJson___description'
  | 'childrenSkillsJson___logo___childExperienceJson___id'
  | 'childrenSkillsJson___logo___childExperienceJson___children'
  | 'childrenSkillsJson___logo___childExperienceJson___dataId'
  | 'childrenSkillsJson___logo___childExperienceJson___type'
  | 'childrenSkillsJson___logo___childExperienceJson___title'
  | 'childrenSkillsJson___logo___childExperienceJson___subtitle'
  | 'childrenSkillsJson___logo___childExperienceJson___startDate'
  | 'childrenSkillsJson___logo___childExperienceJson___endDate'
  | 'childrenSkillsJson___logo___childExperienceJson___description'
  | 'childrenSkillsJson___logo___childrenAboutMeJson'
  | 'childrenSkillsJson___logo___childrenAboutMeJson___id'
  | 'childrenSkillsJson___logo___childrenAboutMeJson___children'
  | 'childrenSkillsJson___logo___childrenAboutMeJson___dataId'
  | 'childrenSkillsJson___logo___childrenAboutMeJson___title'
  | 'childrenSkillsJson___logo___childrenAboutMeJson___description'
  | 'childrenSkillsJson___logo___childrenAboutMeJson___shortDescription'
  | 'childrenSkillsJson___logo___childrenAboutMeJson___downloadResumeLabel'
  | 'childrenSkillsJson___logo___childrenAboutMeJson___contactLabel'
  | 'childrenSkillsJson___logo___childAboutMeJson___id'
  | 'childrenSkillsJson___logo___childAboutMeJson___children'
  | 'childrenSkillsJson___logo___childAboutMeJson___dataId'
  | 'childrenSkillsJson___logo___childAboutMeJson___title'
  | 'childrenSkillsJson___logo___childAboutMeJson___description'
  | 'childrenSkillsJson___logo___childAboutMeJson___shortDescription'
  | 'childrenSkillsJson___logo___childAboutMeJson___downloadResumeLabel'
  | 'childrenSkillsJson___logo___childAboutMeJson___contactLabel'
  | 'childrenSkillsJson___logo___id'
  | 'childrenSkillsJson___logo___parent___id'
  | 'childrenSkillsJson___logo___parent___children'
  | 'childrenSkillsJson___logo___children'
  | 'childrenSkillsJson___logo___children___id'
  | 'childrenSkillsJson___logo___children___children'
  | 'childrenSkillsJson___logo___internal___content'
  | 'childrenSkillsJson___logo___internal___contentDigest'
  | 'childrenSkillsJson___logo___internal___description'
  | 'childrenSkillsJson___logo___internal___fieldOwners'
  | 'childrenSkillsJson___logo___internal___ignoreType'
  | 'childrenSkillsJson___logo___internal___mediaType'
  | 'childrenSkillsJson___logo___internal___owner'
  | 'childrenSkillsJson___logo___internal___type'
  | 'childrenSkillsJson___rating'
  | 'childrenSkillsJson___skillLevel'
  | 'childrenSkillsJson___link'
  | 'childSkillsJson___id'
  | 'childSkillsJson___parent___id'
  | 'childSkillsJson___parent___parent___id'
  | 'childSkillsJson___parent___parent___children'
  | 'childSkillsJson___parent___children'
  | 'childSkillsJson___parent___children___id'
  | 'childSkillsJson___parent___children___children'
  | 'childSkillsJson___parent___internal___content'
  | 'childSkillsJson___parent___internal___contentDigest'
  | 'childSkillsJson___parent___internal___description'
  | 'childSkillsJson___parent___internal___fieldOwners'
  | 'childSkillsJson___parent___internal___ignoreType'
  | 'childSkillsJson___parent___internal___mediaType'
  | 'childSkillsJson___parent___internal___owner'
  | 'childSkillsJson___parent___internal___type'
  | 'childSkillsJson___children'
  | 'childSkillsJson___children___id'
  | 'childSkillsJson___children___parent___id'
  | 'childSkillsJson___children___parent___children'
  | 'childSkillsJson___children___children'
  | 'childSkillsJson___children___children___id'
  | 'childSkillsJson___children___children___children'
  | 'childSkillsJson___children___internal___content'
  | 'childSkillsJson___children___internal___contentDigest'
  | 'childSkillsJson___children___internal___description'
  | 'childSkillsJson___children___internal___fieldOwners'
  | 'childSkillsJson___children___internal___ignoreType'
  | 'childSkillsJson___children___internal___mediaType'
  | 'childSkillsJson___children___internal___owner'
  | 'childSkillsJson___children___internal___type'
  | 'childSkillsJson___internal___content'
  | 'childSkillsJson___internal___contentDigest'
  | 'childSkillsJson___internal___description'
  | 'childSkillsJson___internal___fieldOwners'
  | 'childSkillsJson___internal___ignoreType'
  | 'childSkillsJson___internal___mediaType'
  | 'childSkillsJson___internal___owner'
  | 'childSkillsJson___internal___type'
  | 'childSkillsJson___name'
  | 'childSkillsJson___shortName'
  | 'childSkillsJson___type'
  | 'childSkillsJson___description'
  | 'childSkillsJson___startDate'
  | 'childSkillsJson___endDate'
  | 'childSkillsJson___logo___sourceInstanceName'
  | 'childSkillsJson___logo___absolutePath'
  | 'childSkillsJson___logo___relativePath'
  | 'childSkillsJson___logo___extension'
  | 'childSkillsJson___logo___size'
  | 'childSkillsJson___logo___prettySize'
  | 'childSkillsJson___logo___modifiedTime'
  | 'childSkillsJson___logo___accessTime'
  | 'childSkillsJson___logo___changeTime'
  | 'childSkillsJson___logo___birthTime'
  | 'childSkillsJson___logo___root'
  | 'childSkillsJson___logo___dir'
  | 'childSkillsJson___logo___base'
  | 'childSkillsJson___logo___ext'
  | 'childSkillsJson___logo___name'
  | 'childSkillsJson___logo___relativeDirectory'
  | 'childSkillsJson___logo___dev'
  | 'childSkillsJson___logo___mode'
  | 'childSkillsJson___logo___nlink'
  | 'childSkillsJson___logo___uid'
  | 'childSkillsJson___logo___gid'
  | 'childSkillsJson___logo___rdev'
  | 'childSkillsJson___logo___ino'
  | 'childSkillsJson___logo___atimeMs'
  | 'childSkillsJson___logo___mtimeMs'
  | 'childSkillsJson___logo___ctimeMs'
  | 'childSkillsJson___logo___atime'
  | 'childSkillsJson___logo___mtime'
  | 'childSkillsJson___logo___ctime'
  | 'childSkillsJson___logo___birthtime'
  | 'childSkillsJson___logo___birthtimeMs'
  | 'childSkillsJson___logo___blksize'
  | 'childSkillsJson___logo___blocks'
  | 'childSkillsJson___logo___publicURL'
  | 'childSkillsJson___logo___childrenSkillsJson'
  | 'childSkillsJson___logo___childrenSkillsJson___id'
  | 'childSkillsJson___logo___childrenSkillsJson___children'
  | 'childSkillsJson___logo___childrenSkillsJson___name'
  | 'childSkillsJson___logo___childrenSkillsJson___shortName'
  | 'childSkillsJson___logo___childrenSkillsJson___type'
  | 'childSkillsJson___logo___childrenSkillsJson___description'
  | 'childSkillsJson___logo___childrenSkillsJson___startDate'
  | 'childSkillsJson___logo___childrenSkillsJson___endDate'
  | 'childSkillsJson___logo___childrenSkillsJson___rating'
  | 'childSkillsJson___logo___childrenSkillsJson___skillLevel'
  | 'childSkillsJson___logo___childrenSkillsJson___link'
  | 'childSkillsJson___logo___childSkillsJson___id'
  | 'childSkillsJson___logo___childSkillsJson___children'
  | 'childSkillsJson___logo___childSkillsJson___name'
  | 'childSkillsJson___logo___childSkillsJson___shortName'
  | 'childSkillsJson___logo___childSkillsJson___type'
  | 'childSkillsJson___logo___childSkillsJson___description'
  | 'childSkillsJson___logo___childSkillsJson___startDate'
  | 'childSkillsJson___logo___childSkillsJson___endDate'
  | 'childSkillsJson___logo___childSkillsJson___rating'
  | 'childSkillsJson___logo___childSkillsJson___skillLevel'
  | 'childSkillsJson___logo___childSkillsJson___link'
  | 'childSkillsJson___logo___childrenShowcasesJson'
  | 'childSkillsJson___logo___childrenShowcasesJson___id'
  | 'childSkillsJson___logo___childrenShowcasesJson___children'
  | 'childSkillsJson___logo___childrenShowcasesJson___title'
  | 'childSkillsJson___logo___childrenShowcasesJson___type'
  | 'childSkillsJson___logo___childrenShowcasesJson___subtitle'
  | 'childSkillsJson___logo___childrenShowcasesJson___authors'
  | 'childSkillsJson___logo___childrenShowcasesJson___tags'
  | 'childSkillsJson___logo___childrenShowcasesJson___description'
  | 'childSkillsJson___logo___childrenShowcasesJson___link'
  | 'childSkillsJson___logo___childrenShowcasesJson___sourceCodeLink'
  | 'childSkillsJson___logo___childShowcasesJson___id'
  | 'childSkillsJson___logo___childShowcasesJson___children'
  | 'childSkillsJson___logo___childShowcasesJson___title'
  | 'childSkillsJson___logo___childShowcasesJson___type'
  | 'childSkillsJson___logo___childShowcasesJson___subtitle'
  | 'childSkillsJson___logo___childShowcasesJson___authors'
  | 'childSkillsJson___logo___childShowcasesJson___tags'
  | 'childSkillsJson___logo___childShowcasesJson___description'
  | 'childSkillsJson___logo___childShowcasesJson___link'
  | 'childSkillsJson___logo___childShowcasesJson___sourceCodeLink'
  | 'childSkillsJson___logo___childrenExperienceJson'
  | 'childSkillsJson___logo___childrenExperienceJson___id'
  | 'childSkillsJson___logo___childrenExperienceJson___children'
  | 'childSkillsJson___logo___childrenExperienceJson___dataId'
  | 'childSkillsJson___logo___childrenExperienceJson___type'
  | 'childSkillsJson___logo___childrenExperienceJson___title'
  | 'childSkillsJson___logo___childrenExperienceJson___subtitle'
  | 'childSkillsJson___logo___childrenExperienceJson___startDate'
  | 'childSkillsJson___logo___childrenExperienceJson___endDate'
  | 'childSkillsJson___logo___childrenExperienceJson___description'
  | 'childSkillsJson___logo___childExperienceJson___id'
  | 'childSkillsJson___logo___childExperienceJson___children'
  | 'childSkillsJson___logo___childExperienceJson___dataId'
  | 'childSkillsJson___logo___childExperienceJson___type'
  | 'childSkillsJson___logo___childExperienceJson___title'
  | 'childSkillsJson___logo___childExperienceJson___subtitle'
  | 'childSkillsJson___logo___childExperienceJson___startDate'
  | 'childSkillsJson___logo___childExperienceJson___endDate'
  | 'childSkillsJson___logo___childExperienceJson___description'
  | 'childSkillsJson___logo___childrenAboutMeJson'
  | 'childSkillsJson___logo___childrenAboutMeJson___id'
  | 'childSkillsJson___logo___childrenAboutMeJson___children'
  | 'childSkillsJson___logo___childrenAboutMeJson___dataId'
  | 'childSkillsJson___logo___childrenAboutMeJson___title'
  | 'childSkillsJson___logo___childrenAboutMeJson___description'
  | 'childSkillsJson___logo___childrenAboutMeJson___shortDescription'
  | 'childSkillsJson___logo___childrenAboutMeJson___downloadResumeLabel'
  | 'childSkillsJson___logo___childrenAboutMeJson___contactLabel'
  | 'childSkillsJson___logo___childAboutMeJson___id'
  | 'childSkillsJson___logo___childAboutMeJson___children'
  | 'childSkillsJson___logo___childAboutMeJson___dataId'
  | 'childSkillsJson___logo___childAboutMeJson___title'
  | 'childSkillsJson___logo___childAboutMeJson___description'
  | 'childSkillsJson___logo___childAboutMeJson___shortDescription'
  | 'childSkillsJson___logo___childAboutMeJson___downloadResumeLabel'
  | 'childSkillsJson___logo___childAboutMeJson___contactLabel'
  | 'childSkillsJson___logo___id'
  | 'childSkillsJson___logo___parent___id'
  | 'childSkillsJson___logo___parent___children'
  | 'childSkillsJson___logo___children'
  | 'childSkillsJson___logo___children___id'
  | 'childSkillsJson___logo___children___children'
  | 'childSkillsJson___logo___internal___content'
  | 'childSkillsJson___logo___internal___contentDigest'
  | 'childSkillsJson___logo___internal___description'
  | 'childSkillsJson___logo___internal___fieldOwners'
  | 'childSkillsJson___logo___internal___ignoreType'
  | 'childSkillsJson___logo___internal___mediaType'
  | 'childSkillsJson___logo___internal___owner'
  | 'childSkillsJson___logo___internal___type'
  | 'childSkillsJson___rating'
  | 'childSkillsJson___skillLevel'
  | 'childSkillsJson___link'
  | 'childrenShowcasesJson'
  | 'childrenShowcasesJson___id'
  | 'childrenShowcasesJson___parent___id'
  | 'childrenShowcasesJson___parent___parent___id'
  | 'childrenShowcasesJson___parent___parent___children'
  | 'childrenShowcasesJson___parent___children'
  | 'childrenShowcasesJson___parent___children___id'
  | 'childrenShowcasesJson___parent___children___children'
  | 'childrenShowcasesJson___parent___internal___content'
  | 'childrenShowcasesJson___parent___internal___contentDigest'
  | 'childrenShowcasesJson___parent___internal___description'
  | 'childrenShowcasesJson___parent___internal___fieldOwners'
  | 'childrenShowcasesJson___parent___internal___ignoreType'
  | 'childrenShowcasesJson___parent___internal___mediaType'
  | 'childrenShowcasesJson___parent___internal___owner'
  | 'childrenShowcasesJson___parent___internal___type'
  | 'childrenShowcasesJson___children'
  | 'childrenShowcasesJson___children___id'
  | 'childrenShowcasesJson___children___parent___id'
  | 'childrenShowcasesJson___children___parent___children'
  | 'childrenShowcasesJson___children___children'
  | 'childrenShowcasesJson___children___children___id'
  | 'childrenShowcasesJson___children___children___children'
  | 'childrenShowcasesJson___children___internal___content'
  | 'childrenShowcasesJson___children___internal___contentDigest'
  | 'childrenShowcasesJson___children___internal___description'
  | 'childrenShowcasesJson___children___internal___fieldOwners'
  | 'childrenShowcasesJson___children___internal___ignoreType'
  | 'childrenShowcasesJson___children___internal___mediaType'
  | 'childrenShowcasesJson___children___internal___owner'
  | 'childrenShowcasesJson___children___internal___type'
  | 'childrenShowcasesJson___internal___content'
  | 'childrenShowcasesJson___internal___contentDigest'
  | 'childrenShowcasesJson___internal___description'
  | 'childrenShowcasesJson___internal___fieldOwners'
  | 'childrenShowcasesJson___internal___ignoreType'
  | 'childrenShowcasesJson___internal___mediaType'
  | 'childrenShowcasesJson___internal___owner'
  | 'childrenShowcasesJson___internal___type'
  | 'childrenShowcasesJson___title'
  | 'childrenShowcasesJson___type'
  | 'childrenShowcasesJson___subtitle'
  | 'childrenShowcasesJson___image___sourceInstanceName'
  | 'childrenShowcasesJson___image___absolutePath'
  | 'childrenShowcasesJson___image___relativePath'
  | 'childrenShowcasesJson___image___extension'
  | 'childrenShowcasesJson___image___size'
  | 'childrenShowcasesJson___image___prettySize'
  | 'childrenShowcasesJson___image___modifiedTime'
  | 'childrenShowcasesJson___image___accessTime'
  | 'childrenShowcasesJson___image___changeTime'
  | 'childrenShowcasesJson___image___birthTime'
  | 'childrenShowcasesJson___image___root'
  | 'childrenShowcasesJson___image___dir'
  | 'childrenShowcasesJson___image___base'
  | 'childrenShowcasesJson___image___ext'
  | 'childrenShowcasesJson___image___name'
  | 'childrenShowcasesJson___image___relativeDirectory'
  | 'childrenShowcasesJson___image___dev'
  | 'childrenShowcasesJson___image___mode'
  | 'childrenShowcasesJson___image___nlink'
  | 'childrenShowcasesJson___image___uid'
  | 'childrenShowcasesJson___image___gid'
  | 'childrenShowcasesJson___image___rdev'
  | 'childrenShowcasesJson___image___ino'
  | 'childrenShowcasesJson___image___atimeMs'
  | 'childrenShowcasesJson___image___mtimeMs'
  | 'childrenShowcasesJson___image___ctimeMs'
  | 'childrenShowcasesJson___image___atime'
  | 'childrenShowcasesJson___image___mtime'
  | 'childrenShowcasesJson___image___ctime'
  | 'childrenShowcasesJson___image___birthtime'
  | 'childrenShowcasesJson___image___birthtimeMs'
  | 'childrenShowcasesJson___image___blksize'
  | 'childrenShowcasesJson___image___blocks'
  | 'childrenShowcasesJson___image___publicURL'
  | 'childrenShowcasesJson___image___childrenSkillsJson'
  | 'childrenShowcasesJson___image___childrenSkillsJson___id'
  | 'childrenShowcasesJson___image___childrenSkillsJson___children'
  | 'childrenShowcasesJson___image___childrenSkillsJson___name'
  | 'childrenShowcasesJson___image___childrenSkillsJson___shortName'
  | 'childrenShowcasesJson___image___childrenSkillsJson___type'
  | 'childrenShowcasesJson___image___childrenSkillsJson___description'
  | 'childrenShowcasesJson___image___childrenSkillsJson___startDate'
  | 'childrenShowcasesJson___image___childrenSkillsJson___endDate'
  | 'childrenShowcasesJson___image___childrenSkillsJson___rating'
  | 'childrenShowcasesJson___image___childrenSkillsJson___skillLevel'
  | 'childrenShowcasesJson___image___childrenSkillsJson___link'
  | 'childrenShowcasesJson___image___childSkillsJson___id'
  | 'childrenShowcasesJson___image___childSkillsJson___children'
  | 'childrenShowcasesJson___image___childSkillsJson___name'
  | 'childrenShowcasesJson___image___childSkillsJson___shortName'
  | 'childrenShowcasesJson___image___childSkillsJson___type'
  | 'childrenShowcasesJson___image___childSkillsJson___description'
  | 'childrenShowcasesJson___image___childSkillsJson___startDate'
  | 'childrenShowcasesJson___image___childSkillsJson___endDate'
  | 'childrenShowcasesJson___image___childSkillsJson___rating'
  | 'childrenShowcasesJson___image___childSkillsJson___skillLevel'
  | 'childrenShowcasesJson___image___childSkillsJson___link'
  | 'childrenShowcasesJson___image___childrenShowcasesJson'
  | 'childrenShowcasesJson___image___childrenShowcasesJson___id'
  | 'childrenShowcasesJson___image___childrenShowcasesJson___children'
  | 'childrenShowcasesJson___image___childrenShowcasesJson___title'
  | 'childrenShowcasesJson___image___childrenShowcasesJson___type'
  | 'childrenShowcasesJson___image___childrenShowcasesJson___subtitle'
  | 'childrenShowcasesJson___image___childrenShowcasesJson___authors'
  | 'childrenShowcasesJson___image___childrenShowcasesJson___tags'
  | 'childrenShowcasesJson___image___childrenShowcasesJson___description'
  | 'childrenShowcasesJson___image___childrenShowcasesJson___link'
  | 'childrenShowcasesJson___image___childrenShowcasesJson___sourceCodeLink'
  | 'childrenShowcasesJson___image___childShowcasesJson___id'
  | 'childrenShowcasesJson___image___childShowcasesJson___children'
  | 'childrenShowcasesJson___image___childShowcasesJson___title'
  | 'childrenShowcasesJson___image___childShowcasesJson___type'
  | 'childrenShowcasesJson___image___childShowcasesJson___subtitle'
  | 'childrenShowcasesJson___image___childShowcasesJson___authors'
  | 'childrenShowcasesJson___image___childShowcasesJson___tags'
  | 'childrenShowcasesJson___image___childShowcasesJson___description'
  | 'childrenShowcasesJson___image___childShowcasesJson___link'
  | 'childrenShowcasesJson___image___childShowcasesJson___sourceCodeLink'
  | 'childrenShowcasesJson___image___childrenExperienceJson'
  | 'childrenShowcasesJson___image___childrenExperienceJson___id'
  | 'childrenShowcasesJson___image___childrenExperienceJson___children'
  | 'childrenShowcasesJson___image___childrenExperienceJson___dataId'
  | 'childrenShowcasesJson___image___childrenExperienceJson___type'
  | 'childrenShowcasesJson___image___childrenExperienceJson___title'
  | 'childrenShowcasesJson___image___childrenExperienceJson___subtitle'
  | 'childrenShowcasesJson___image___childrenExperienceJson___startDate'
  | 'childrenShowcasesJson___image___childrenExperienceJson___endDate'
  | 'childrenShowcasesJson___image___childrenExperienceJson___description'
  | 'childrenShowcasesJson___image___childExperienceJson___id'
  | 'childrenShowcasesJson___image___childExperienceJson___children'
  | 'childrenShowcasesJson___image___childExperienceJson___dataId'
  | 'childrenShowcasesJson___image___childExperienceJson___type'
  | 'childrenShowcasesJson___image___childExperienceJson___title'
  | 'childrenShowcasesJson___image___childExperienceJson___subtitle'
  | 'childrenShowcasesJson___image___childExperienceJson___startDate'
  | 'childrenShowcasesJson___image___childExperienceJson___endDate'
  | 'childrenShowcasesJson___image___childExperienceJson___description'
  | 'childrenShowcasesJson___image___childrenAboutMeJson'
  | 'childrenShowcasesJson___image___childrenAboutMeJson___id'
  | 'childrenShowcasesJson___image___childrenAboutMeJson___children'
  | 'childrenShowcasesJson___image___childrenAboutMeJson___dataId'
  | 'childrenShowcasesJson___image___childrenAboutMeJson___title'
  | 'childrenShowcasesJson___image___childrenAboutMeJson___description'
  | 'childrenShowcasesJson___image___childrenAboutMeJson___shortDescription'
  | 'childrenShowcasesJson___image___childrenAboutMeJson___downloadResumeLabel'
  | 'childrenShowcasesJson___image___childrenAboutMeJson___contactLabel'
  | 'childrenShowcasesJson___image___childAboutMeJson___id'
  | 'childrenShowcasesJson___image___childAboutMeJson___children'
  | 'childrenShowcasesJson___image___childAboutMeJson___dataId'
  | 'childrenShowcasesJson___image___childAboutMeJson___title'
  | 'childrenShowcasesJson___image___childAboutMeJson___description'
  | 'childrenShowcasesJson___image___childAboutMeJson___shortDescription'
  | 'childrenShowcasesJson___image___childAboutMeJson___downloadResumeLabel'
  | 'childrenShowcasesJson___image___childAboutMeJson___contactLabel'
  | 'childrenShowcasesJson___image___id'
  | 'childrenShowcasesJson___image___parent___id'
  | 'childrenShowcasesJson___image___parent___children'
  | 'childrenShowcasesJson___image___children'
  | 'childrenShowcasesJson___image___children___id'
  | 'childrenShowcasesJson___image___children___children'
  | 'childrenShowcasesJson___image___internal___content'
  | 'childrenShowcasesJson___image___internal___contentDigest'
  | 'childrenShowcasesJson___image___internal___description'
  | 'childrenShowcasesJson___image___internal___fieldOwners'
  | 'childrenShowcasesJson___image___internal___ignoreType'
  | 'childrenShowcasesJson___image___internal___mediaType'
  | 'childrenShowcasesJson___image___internal___owner'
  | 'childrenShowcasesJson___image___internal___type'
  | 'childrenShowcasesJson___authors'
  | 'childrenShowcasesJson___tags'
  | 'childrenShowcasesJson___description'
  | 'childrenShowcasesJson___link'
  | 'childrenShowcasesJson___sourceCodeLink'
  | 'childrenShowcasesJson___internalLink___sourceInstanceName'
  | 'childrenShowcasesJson___internalLink___absolutePath'
  | 'childrenShowcasesJson___internalLink___relativePath'
  | 'childrenShowcasesJson___internalLink___extension'
  | 'childrenShowcasesJson___internalLink___size'
  | 'childrenShowcasesJson___internalLink___prettySize'
  | 'childrenShowcasesJson___internalLink___modifiedTime'
  | 'childrenShowcasesJson___internalLink___accessTime'
  | 'childrenShowcasesJson___internalLink___changeTime'
  | 'childrenShowcasesJson___internalLink___birthTime'
  | 'childrenShowcasesJson___internalLink___root'
  | 'childrenShowcasesJson___internalLink___dir'
  | 'childrenShowcasesJson___internalLink___base'
  | 'childrenShowcasesJson___internalLink___ext'
  | 'childrenShowcasesJson___internalLink___name'
  | 'childrenShowcasesJson___internalLink___relativeDirectory'
  | 'childrenShowcasesJson___internalLink___dev'
  | 'childrenShowcasesJson___internalLink___mode'
  | 'childrenShowcasesJson___internalLink___nlink'
  | 'childrenShowcasesJson___internalLink___uid'
  | 'childrenShowcasesJson___internalLink___gid'
  | 'childrenShowcasesJson___internalLink___rdev'
  | 'childrenShowcasesJson___internalLink___ino'
  | 'childrenShowcasesJson___internalLink___atimeMs'
  | 'childrenShowcasesJson___internalLink___mtimeMs'
  | 'childrenShowcasesJson___internalLink___ctimeMs'
  | 'childrenShowcasesJson___internalLink___atime'
  | 'childrenShowcasesJson___internalLink___mtime'
  | 'childrenShowcasesJson___internalLink___ctime'
  | 'childrenShowcasesJson___internalLink___birthtime'
  | 'childrenShowcasesJson___internalLink___birthtimeMs'
  | 'childrenShowcasesJson___internalLink___blksize'
  | 'childrenShowcasesJson___internalLink___blocks'
  | 'childrenShowcasesJson___internalLink___publicURL'
  | 'childrenShowcasesJson___internalLink___childrenSkillsJson'
  | 'childrenShowcasesJson___internalLink___childrenSkillsJson___id'
  | 'childrenShowcasesJson___internalLink___childrenSkillsJson___children'
  | 'childrenShowcasesJson___internalLink___childrenSkillsJson___name'
  | 'childrenShowcasesJson___internalLink___childrenSkillsJson___shortName'
  | 'childrenShowcasesJson___internalLink___childrenSkillsJson___type'
  | 'childrenShowcasesJson___internalLink___childrenSkillsJson___description'
  | 'childrenShowcasesJson___internalLink___childrenSkillsJson___startDate'
  | 'childrenShowcasesJson___internalLink___childrenSkillsJson___endDate'
  | 'childrenShowcasesJson___internalLink___childrenSkillsJson___rating'
  | 'childrenShowcasesJson___internalLink___childrenSkillsJson___skillLevel'
  | 'childrenShowcasesJson___internalLink___childrenSkillsJson___link'
  | 'childrenShowcasesJson___internalLink___childSkillsJson___id'
  | 'childrenShowcasesJson___internalLink___childSkillsJson___children'
  | 'childrenShowcasesJson___internalLink___childSkillsJson___name'
  | 'childrenShowcasesJson___internalLink___childSkillsJson___shortName'
  | 'childrenShowcasesJson___internalLink___childSkillsJson___type'
  | 'childrenShowcasesJson___internalLink___childSkillsJson___description'
  | 'childrenShowcasesJson___internalLink___childSkillsJson___startDate'
  | 'childrenShowcasesJson___internalLink___childSkillsJson___endDate'
  | 'childrenShowcasesJson___internalLink___childSkillsJson___rating'
  | 'childrenShowcasesJson___internalLink___childSkillsJson___skillLevel'
  | 'childrenShowcasesJson___internalLink___childSkillsJson___link'
  | 'childrenShowcasesJson___internalLink___childrenShowcasesJson'
  | 'childrenShowcasesJson___internalLink___childrenShowcasesJson___id'
  | 'childrenShowcasesJson___internalLink___childrenShowcasesJson___children'
  | 'childrenShowcasesJson___internalLink___childrenShowcasesJson___title'
  | 'childrenShowcasesJson___internalLink___childrenShowcasesJson___type'
  | 'childrenShowcasesJson___internalLink___childrenShowcasesJson___subtitle'
  | 'childrenShowcasesJson___internalLink___childrenShowcasesJson___authors'
  | 'childrenShowcasesJson___internalLink___childrenShowcasesJson___tags'
  | 'childrenShowcasesJson___internalLink___childrenShowcasesJson___description'
  | 'childrenShowcasesJson___internalLink___childrenShowcasesJson___link'
  | 'childrenShowcasesJson___internalLink___childrenShowcasesJson___sourceCodeLink'
  | 'childrenShowcasesJson___internalLink___childShowcasesJson___id'
  | 'childrenShowcasesJson___internalLink___childShowcasesJson___children'
  | 'childrenShowcasesJson___internalLink___childShowcasesJson___title'
  | 'childrenShowcasesJson___internalLink___childShowcasesJson___type'
  | 'childrenShowcasesJson___internalLink___childShowcasesJson___subtitle'
  | 'childrenShowcasesJson___internalLink___childShowcasesJson___authors'
  | 'childrenShowcasesJson___internalLink___childShowcasesJson___tags'
  | 'childrenShowcasesJson___internalLink___childShowcasesJson___description'
  | 'childrenShowcasesJson___internalLink___childShowcasesJson___link'
  | 'childrenShowcasesJson___internalLink___childShowcasesJson___sourceCodeLink'
  | 'childrenShowcasesJson___internalLink___childrenExperienceJson'
  | 'childrenShowcasesJson___internalLink___childrenExperienceJson___id'
  | 'childrenShowcasesJson___internalLink___childrenExperienceJson___children'
  | 'childrenShowcasesJson___internalLink___childrenExperienceJson___dataId'
  | 'childrenShowcasesJson___internalLink___childrenExperienceJson___type'
  | 'childrenShowcasesJson___internalLink___childrenExperienceJson___title'
  | 'childrenShowcasesJson___internalLink___childrenExperienceJson___subtitle'
  | 'childrenShowcasesJson___internalLink___childrenExperienceJson___startDate'
  | 'childrenShowcasesJson___internalLink___childrenExperienceJson___endDate'
  | 'childrenShowcasesJson___internalLink___childrenExperienceJson___description'
  | 'childrenShowcasesJson___internalLink___childExperienceJson___id'
  | 'childrenShowcasesJson___internalLink___childExperienceJson___children'
  | 'childrenShowcasesJson___internalLink___childExperienceJson___dataId'
  | 'childrenShowcasesJson___internalLink___childExperienceJson___type'
  | 'childrenShowcasesJson___internalLink___childExperienceJson___title'
  | 'childrenShowcasesJson___internalLink___childExperienceJson___subtitle'
  | 'childrenShowcasesJson___internalLink___childExperienceJson___startDate'
  | 'childrenShowcasesJson___internalLink___childExperienceJson___endDate'
  | 'childrenShowcasesJson___internalLink___childExperienceJson___description'
  | 'childrenShowcasesJson___internalLink___childrenAboutMeJson'
  | 'childrenShowcasesJson___internalLink___childrenAboutMeJson___id'
  | 'childrenShowcasesJson___internalLink___childrenAboutMeJson___children'
  | 'childrenShowcasesJson___internalLink___childrenAboutMeJson___dataId'
  | 'childrenShowcasesJson___internalLink___childrenAboutMeJson___title'
  | 'childrenShowcasesJson___internalLink___childrenAboutMeJson___description'
  | 'childrenShowcasesJson___internalLink___childrenAboutMeJson___shortDescription'
  | 'childrenShowcasesJson___internalLink___childrenAboutMeJson___downloadResumeLabel'
  | 'childrenShowcasesJson___internalLink___childrenAboutMeJson___contactLabel'
  | 'childrenShowcasesJson___internalLink___childAboutMeJson___id'
  | 'childrenShowcasesJson___internalLink___childAboutMeJson___children'
  | 'childrenShowcasesJson___internalLink___childAboutMeJson___dataId'
  | 'childrenShowcasesJson___internalLink___childAboutMeJson___title'
  | 'childrenShowcasesJson___internalLink___childAboutMeJson___description'
  | 'childrenShowcasesJson___internalLink___childAboutMeJson___shortDescription'
  | 'childrenShowcasesJson___internalLink___childAboutMeJson___downloadResumeLabel'
  | 'childrenShowcasesJson___internalLink___childAboutMeJson___contactLabel'
  | 'childrenShowcasesJson___internalLink___id'
  | 'childrenShowcasesJson___internalLink___parent___id'
  | 'childrenShowcasesJson___internalLink___parent___children'
  | 'childrenShowcasesJson___internalLink___children'
  | 'childrenShowcasesJson___internalLink___children___id'
  | 'childrenShowcasesJson___internalLink___children___children'
  | 'childrenShowcasesJson___internalLink___internal___content'
  | 'childrenShowcasesJson___internalLink___internal___contentDigest'
  | 'childrenShowcasesJson___internalLink___internal___description'
  | 'childrenShowcasesJson___internalLink___internal___fieldOwners'
  | 'childrenShowcasesJson___internalLink___internal___ignoreType'
  | 'childrenShowcasesJson___internalLink___internal___mediaType'
  | 'childrenShowcasesJson___internalLink___internal___owner'
  | 'childrenShowcasesJson___internalLink___internal___type'
  | 'childShowcasesJson___id'
  | 'childShowcasesJson___parent___id'
  | 'childShowcasesJson___parent___parent___id'
  | 'childShowcasesJson___parent___parent___children'
  | 'childShowcasesJson___parent___children'
  | 'childShowcasesJson___parent___children___id'
  | 'childShowcasesJson___parent___children___children'
  | 'childShowcasesJson___parent___internal___content'
  | 'childShowcasesJson___parent___internal___contentDigest'
  | 'childShowcasesJson___parent___internal___description'
  | 'childShowcasesJson___parent___internal___fieldOwners'
  | 'childShowcasesJson___parent___internal___ignoreType'
  | 'childShowcasesJson___parent___internal___mediaType'
  | 'childShowcasesJson___parent___internal___owner'
  | 'childShowcasesJson___parent___internal___type'
  | 'childShowcasesJson___children'
  | 'childShowcasesJson___children___id'
  | 'childShowcasesJson___children___parent___id'
  | 'childShowcasesJson___children___parent___children'
  | 'childShowcasesJson___children___children'
  | 'childShowcasesJson___children___children___id'
  | 'childShowcasesJson___children___children___children'
  | 'childShowcasesJson___children___internal___content'
  | 'childShowcasesJson___children___internal___contentDigest'
  | 'childShowcasesJson___children___internal___description'
  | 'childShowcasesJson___children___internal___fieldOwners'
  | 'childShowcasesJson___children___internal___ignoreType'
  | 'childShowcasesJson___children___internal___mediaType'
  | 'childShowcasesJson___children___internal___owner'
  | 'childShowcasesJson___children___internal___type'
  | 'childShowcasesJson___internal___content'
  | 'childShowcasesJson___internal___contentDigest'
  | 'childShowcasesJson___internal___description'
  | 'childShowcasesJson___internal___fieldOwners'
  | 'childShowcasesJson___internal___ignoreType'
  | 'childShowcasesJson___internal___mediaType'
  | 'childShowcasesJson___internal___owner'
  | 'childShowcasesJson___internal___type'
  | 'childShowcasesJson___title'
  | 'childShowcasesJson___type'
  | 'childShowcasesJson___subtitle'
  | 'childShowcasesJson___image___sourceInstanceName'
  | 'childShowcasesJson___image___absolutePath'
  | 'childShowcasesJson___image___relativePath'
  | 'childShowcasesJson___image___extension'
  | 'childShowcasesJson___image___size'
  | 'childShowcasesJson___image___prettySize'
  | 'childShowcasesJson___image___modifiedTime'
  | 'childShowcasesJson___image___accessTime'
  | 'childShowcasesJson___image___changeTime'
  | 'childShowcasesJson___image___birthTime'
  | 'childShowcasesJson___image___root'
  | 'childShowcasesJson___image___dir'
  | 'childShowcasesJson___image___base'
  | 'childShowcasesJson___image___ext'
  | 'childShowcasesJson___image___name'
  | 'childShowcasesJson___image___relativeDirectory'
  | 'childShowcasesJson___image___dev'
  | 'childShowcasesJson___image___mode'
  | 'childShowcasesJson___image___nlink'
  | 'childShowcasesJson___image___uid'
  | 'childShowcasesJson___image___gid'
  | 'childShowcasesJson___image___rdev'
  | 'childShowcasesJson___image___ino'
  | 'childShowcasesJson___image___atimeMs'
  | 'childShowcasesJson___image___mtimeMs'
  | 'childShowcasesJson___image___ctimeMs'
  | 'childShowcasesJson___image___atime'
  | 'childShowcasesJson___image___mtime'
  | 'childShowcasesJson___image___ctime'
  | 'childShowcasesJson___image___birthtime'
  | 'childShowcasesJson___image___birthtimeMs'
  | 'childShowcasesJson___image___blksize'
  | 'childShowcasesJson___image___blocks'
  | 'childShowcasesJson___image___publicURL'
  | 'childShowcasesJson___image___childrenSkillsJson'
  | 'childShowcasesJson___image___childrenSkillsJson___id'
  | 'childShowcasesJson___image___childrenSkillsJson___children'
  | 'childShowcasesJson___image___childrenSkillsJson___name'
  | 'childShowcasesJson___image___childrenSkillsJson___shortName'
  | 'childShowcasesJson___image___childrenSkillsJson___type'
  | 'childShowcasesJson___image___childrenSkillsJson___description'
  | 'childShowcasesJson___image___childrenSkillsJson___startDate'
  | 'childShowcasesJson___image___childrenSkillsJson___endDate'
  | 'childShowcasesJson___image___childrenSkillsJson___rating'
  | 'childShowcasesJson___image___childrenSkillsJson___skillLevel'
  | 'childShowcasesJson___image___childrenSkillsJson___link'
  | 'childShowcasesJson___image___childSkillsJson___id'
  | 'childShowcasesJson___image___childSkillsJson___children'
  | 'childShowcasesJson___image___childSkillsJson___name'
  | 'childShowcasesJson___image___childSkillsJson___shortName'
  | 'childShowcasesJson___image___childSkillsJson___type'
  | 'childShowcasesJson___image___childSkillsJson___description'
  | 'childShowcasesJson___image___childSkillsJson___startDate'
  | 'childShowcasesJson___image___childSkillsJson___endDate'
  | 'childShowcasesJson___image___childSkillsJson___rating'
  | 'childShowcasesJson___image___childSkillsJson___skillLevel'
  | 'childShowcasesJson___image___childSkillsJson___link'
  | 'childShowcasesJson___image___childrenShowcasesJson'
  | 'childShowcasesJson___image___childrenShowcasesJson___id'
  | 'childShowcasesJson___image___childrenShowcasesJson___children'
  | 'childShowcasesJson___image___childrenShowcasesJson___title'
  | 'childShowcasesJson___image___childrenShowcasesJson___type'
  | 'childShowcasesJson___image___childrenShowcasesJson___subtitle'
  | 'childShowcasesJson___image___childrenShowcasesJson___authors'
  | 'childShowcasesJson___image___childrenShowcasesJson___tags'
  | 'childShowcasesJson___image___childrenShowcasesJson___description'
  | 'childShowcasesJson___image___childrenShowcasesJson___link'
  | 'childShowcasesJson___image___childrenShowcasesJson___sourceCodeLink'
  | 'childShowcasesJson___image___childShowcasesJson___id'
  | 'childShowcasesJson___image___childShowcasesJson___children'
  | 'childShowcasesJson___image___childShowcasesJson___title'
  | 'childShowcasesJson___image___childShowcasesJson___type'
  | 'childShowcasesJson___image___childShowcasesJson___subtitle'
  | 'childShowcasesJson___image___childShowcasesJson___authors'
  | 'childShowcasesJson___image___childShowcasesJson___tags'
  | 'childShowcasesJson___image___childShowcasesJson___description'
  | 'childShowcasesJson___image___childShowcasesJson___link'
  | 'childShowcasesJson___image___childShowcasesJson___sourceCodeLink'
  | 'childShowcasesJson___image___childrenExperienceJson'
  | 'childShowcasesJson___image___childrenExperienceJson___id'
  | 'childShowcasesJson___image___childrenExperienceJson___children'
  | 'childShowcasesJson___image___childrenExperienceJson___dataId'
  | 'childShowcasesJson___image___childrenExperienceJson___type'
  | 'childShowcasesJson___image___childrenExperienceJson___title'
  | 'childShowcasesJson___image___childrenExperienceJson___subtitle'
  | 'childShowcasesJson___image___childrenExperienceJson___startDate'
  | 'childShowcasesJson___image___childrenExperienceJson___endDate'
  | 'childShowcasesJson___image___childrenExperienceJson___description'
  | 'childShowcasesJson___image___childExperienceJson___id'
  | 'childShowcasesJson___image___childExperienceJson___children'
  | 'childShowcasesJson___image___childExperienceJson___dataId'
  | 'childShowcasesJson___image___childExperienceJson___type'
  | 'childShowcasesJson___image___childExperienceJson___title'
  | 'childShowcasesJson___image___childExperienceJson___subtitle'
  | 'childShowcasesJson___image___childExperienceJson___startDate'
  | 'childShowcasesJson___image___childExperienceJson___endDate'
  | 'childShowcasesJson___image___childExperienceJson___description'
  | 'childShowcasesJson___image___childrenAboutMeJson'
  | 'childShowcasesJson___image___childrenAboutMeJson___id'
  | 'childShowcasesJson___image___childrenAboutMeJson___children'
  | 'childShowcasesJson___image___childrenAboutMeJson___dataId'
  | 'childShowcasesJson___image___childrenAboutMeJson___title'
  | 'childShowcasesJson___image___childrenAboutMeJson___description'
  | 'childShowcasesJson___image___childrenAboutMeJson___shortDescription'
  | 'childShowcasesJson___image___childrenAboutMeJson___downloadResumeLabel'
  | 'childShowcasesJson___image___childrenAboutMeJson___contactLabel'
  | 'childShowcasesJson___image___childAboutMeJson___id'
  | 'childShowcasesJson___image___childAboutMeJson___children'
  | 'childShowcasesJson___image___childAboutMeJson___dataId'
  | 'childShowcasesJson___image___childAboutMeJson___title'
  | 'childShowcasesJson___image___childAboutMeJson___description'
  | 'childShowcasesJson___image___childAboutMeJson___shortDescription'
  | 'childShowcasesJson___image___childAboutMeJson___downloadResumeLabel'
  | 'childShowcasesJson___image___childAboutMeJson___contactLabel'
  | 'childShowcasesJson___image___id'
  | 'childShowcasesJson___image___parent___id'
  | 'childShowcasesJson___image___parent___children'
  | 'childShowcasesJson___image___children'
  | 'childShowcasesJson___image___children___id'
  | 'childShowcasesJson___image___children___children'
  | 'childShowcasesJson___image___internal___content'
  | 'childShowcasesJson___image___internal___contentDigest'
  | 'childShowcasesJson___image___internal___description'
  | 'childShowcasesJson___image___internal___fieldOwners'
  | 'childShowcasesJson___image___internal___ignoreType'
  | 'childShowcasesJson___image___internal___mediaType'
  | 'childShowcasesJson___image___internal___owner'
  | 'childShowcasesJson___image___internal___type'
  | 'childShowcasesJson___authors'
  | 'childShowcasesJson___tags'
  | 'childShowcasesJson___description'
  | 'childShowcasesJson___link'
  | 'childShowcasesJson___sourceCodeLink'
  | 'childShowcasesJson___internalLink___sourceInstanceName'
  | 'childShowcasesJson___internalLink___absolutePath'
  | 'childShowcasesJson___internalLink___relativePath'
  | 'childShowcasesJson___internalLink___extension'
  | 'childShowcasesJson___internalLink___size'
  | 'childShowcasesJson___internalLink___prettySize'
  | 'childShowcasesJson___internalLink___modifiedTime'
  | 'childShowcasesJson___internalLink___accessTime'
  | 'childShowcasesJson___internalLink___changeTime'
  | 'childShowcasesJson___internalLink___birthTime'
  | 'childShowcasesJson___internalLink___root'
  | 'childShowcasesJson___internalLink___dir'
  | 'childShowcasesJson___internalLink___base'
  | 'childShowcasesJson___internalLink___ext'
  | 'childShowcasesJson___internalLink___name'
  | 'childShowcasesJson___internalLink___relativeDirectory'
  | 'childShowcasesJson___internalLink___dev'
  | 'childShowcasesJson___internalLink___mode'
  | 'childShowcasesJson___internalLink___nlink'
  | 'childShowcasesJson___internalLink___uid'
  | 'childShowcasesJson___internalLink___gid'
  | 'childShowcasesJson___internalLink___rdev'
  | 'childShowcasesJson___internalLink___ino'
  | 'childShowcasesJson___internalLink___atimeMs'
  | 'childShowcasesJson___internalLink___mtimeMs'
  | 'childShowcasesJson___internalLink___ctimeMs'
  | 'childShowcasesJson___internalLink___atime'
  | 'childShowcasesJson___internalLink___mtime'
  | 'childShowcasesJson___internalLink___ctime'
  | 'childShowcasesJson___internalLink___birthtime'
  | 'childShowcasesJson___internalLink___birthtimeMs'
  | 'childShowcasesJson___internalLink___blksize'
  | 'childShowcasesJson___internalLink___blocks'
  | 'childShowcasesJson___internalLink___publicURL'
  | 'childShowcasesJson___internalLink___childrenSkillsJson'
  | 'childShowcasesJson___internalLink___childrenSkillsJson___id'
  | 'childShowcasesJson___internalLink___childrenSkillsJson___children'
  | 'childShowcasesJson___internalLink___childrenSkillsJson___name'
  | 'childShowcasesJson___internalLink___childrenSkillsJson___shortName'
  | 'childShowcasesJson___internalLink___childrenSkillsJson___type'
  | 'childShowcasesJson___internalLink___childrenSkillsJson___description'
  | 'childShowcasesJson___internalLink___childrenSkillsJson___startDate'
  | 'childShowcasesJson___internalLink___childrenSkillsJson___endDate'
  | 'childShowcasesJson___internalLink___childrenSkillsJson___rating'
  | 'childShowcasesJson___internalLink___childrenSkillsJson___skillLevel'
  | 'childShowcasesJson___internalLink___childrenSkillsJson___link'
  | 'childShowcasesJson___internalLink___childSkillsJson___id'
  | 'childShowcasesJson___internalLink___childSkillsJson___children'
  | 'childShowcasesJson___internalLink___childSkillsJson___name'
  | 'childShowcasesJson___internalLink___childSkillsJson___shortName'
  | 'childShowcasesJson___internalLink___childSkillsJson___type'
  | 'childShowcasesJson___internalLink___childSkillsJson___description'
  | 'childShowcasesJson___internalLink___childSkillsJson___startDate'
  | 'childShowcasesJson___internalLink___childSkillsJson___endDate'
  | 'childShowcasesJson___internalLink___childSkillsJson___rating'
  | 'childShowcasesJson___internalLink___childSkillsJson___skillLevel'
  | 'childShowcasesJson___internalLink___childSkillsJson___link'
  | 'childShowcasesJson___internalLink___childrenShowcasesJson'
  | 'childShowcasesJson___internalLink___childrenShowcasesJson___id'
  | 'childShowcasesJson___internalLink___childrenShowcasesJson___children'
  | 'childShowcasesJson___internalLink___childrenShowcasesJson___title'
  | 'childShowcasesJson___internalLink___childrenShowcasesJson___type'
  | 'childShowcasesJson___internalLink___childrenShowcasesJson___subtitle'
  | 'childShowcasesJson___internalLink___childrenShowcasesJson___authors'
  | 'childShowcasesJson___internalLink___childrenShowcasesJson___tags'
  | 'childShowcasesJson___internalLink___childrenShowcasesJson___description'
  | 'childShowcasesJson___internalLink___childrenShowcasesJson___link'
  | 'childShowcasesJson___internalLink___childrenShowcasesJson___sourceCodeLink'
  | 'childShowcasesJson___internalLink___childShowcasesJson___id'
  | 'childShowcasesJson___internalLink___childShowcasesJson___children'
  | 'childShowcasesJson___internalLink___childShowcasesJson___title'
  | 'childShowcasesJson___internalLink___childShowcasesJson___type'
  | 'childShowcasesJson___internalLink___childShowcasesJson___subtitle'
  | 'childShowcasesJson___internalLink___childShowcasesJson___authors'
  | 'childShowcasesJson___internalLink___childShowcasesJson___tags'
  | 'childShowcasesJson___internalLink___childShowcasesJson___description'
  | 'childShowcasesJson___internalLink___childShowcasesJson___link'
  | 'childShowcasesJson___internalLink___childShowcasesJson___sourceCodeLink'
  | 'childShowcasesJson___internalLink___childrenExperienceJson'
  | 'childShowcasesJson___internalLink___childrenExperienceJson___id'
  | 'childShowcasesJson___internalLink___childrenExperienceJson___children'
  | 'childShowcasesJson___internalLink___childrenExperienceJson___dataId'
  | 'childShowcasesJson___internalLink___childrenExperienceJson___type'
  | 'childShowcasesJson___internalLink___childrenExperienceJson___title'
  | 'childShowcasesJson___internalLink___childrenExperienceJson___subtitle'
  | 'childShowcasesJson___internalLink___childrenExperienceJson___startDate'
  | 'childShowcasesJson___internalLink___childrenExperienceJson___endDate'
  | 'childShowcasesJson___internalLink___childrenExperienceJson___description'
  | 'childShowcasesJson___internalLink___childExperienceJson___id'
  | 'childShowcasesJson___internalLink___childExperienceJson___children'
  | 'childShowcasesJson___internalLink___childExperienceJson___dataId'
  | 'childShowcasesJson___internalLink___childExperienceJson___type'
  | 'childShowcasesJson___internalLink___childExperienceJson___title'
  | 'childShowcasesJson___internalLink___childExperienceJson___subtitle'
  | 'childShowcasesJson___internalLink___childExperienceJson___startDate'
  | 'childShowcasesJson___internalLink___childExperienceJson___endDate'
  | 'childShowcasesJson___internalLink___childExperienceJson___description'
  | 'childShowcasesJson___internalLink___childrenAboutMeJson'
  | 'childShowcasesJson___internalLink___childrenAboutMeJson___id'
  | 'childShowcasesJson___internalLink___childrenAboutMeJson___children'
  | 'childShowcasesJson___internalLink___childrenAboutMeJson___dataId'
  | 'childShowcasesJson___internalLink___childrenAboutMeJson___title'
  | 'childShowcasesJson___internalLink___childrenAboutMeJson___description'
  | 'childShowcasesJson___internalLink___childrenAboutMeJson___shortDescription'
  | 'childShowcasesJson___internalLink___childrenAboutMeJson___downloadResumeLabel'
  | 'childShowcasesJson___internalLink___childrenAboutMeJson___contactLabel'
  | 'childShowcasesJson___internalLink___childAboutMeJson___id'
  | 'childShowcasesJson___internalLink___childAboutMeJson___children'
  | 'childShowcasesJson___internalLink___childAboutMeJson___dataId'
  | 'childShowcasesJson___internalLink___childAboutMeJson___title'
  | 'childShowcasesJson___internalLink___childAboutMeJson___description'
  | 'childShowcasesJson___internalLink___childAboutMeJson___shortDescription'
  | 'childShowcasesJson___internalLink___childAboutMeJson___downloadResumeLabel'
  | 'childShowcasesJson___internalLink___childAboutMeJson___contactLabel'
  | 'childShowcasesJson___internalLink___id'
  | 'childShowcasesJson___internalLink___parent___id'
  | 'childShowcasesJson___internalLink___parent___children'
  | 'childShowcasesJson___internalLink___children'
  | 'childShowcasesJson___internalLink___children___id'
  | 'childShowcasesJson___internalLink___children___children'
  | 'childShowcasesJson___internalLink___internal___content'
  | 'childShowcasesJson___internalLink___internal___contentDigest'
  | 'childShowcasesJson___internalLink___internal___description'
  | 'childShowcasesJson___internalLink___internal___fieldOwners'
  | 'childShowcasesJson___internalLink___internal___ignoreType'
  | 'childShowcasesJson___internalLink___internal___mediaType'
  | 'childShowcasesJson___internalLink___internal___owner'
  | 'childShowcasesJson___internalLink___internal___type'
  | 'childrenExperienceJson'
  | 'childrenExperienceJson___id'
  | 'childrenExperienceJson___parent___id'
  | 'childrenExperienceJson___parent___parent___id'
  | 'childrenExperienceJson___parent___parent___children'
  | 'childrenExperienceJson___parent___children'
  | 'childrenExperienceJson___parent___children___id'
  | 'childrenExperienceJson___parent___children___children'
  | 'childrenExperienceJson___parent___internal___content'
  | 'childrenExperienceJson___parent___internal___contentDigest'
  | 'childrenExperienceJson___parent___internal___description'
  | 'childrenExperienceJson___parent___internal___fieldOwners'
  | 'childrenExperienceJson___parent___internal___ignoreType'
  | 'childrenExperienceJson___parent___internal___mediaType'
  | 'childrenExperienceJson___parent___internal___owner'
  | 'childrenExperienceJson___parent___internal___type'
  | 'childrenExperienceJson___children'
  | 'childrenExperienceJson___children___id'
  | 'childrenExperienceJson___children___parent___id'
  | 'childrenExperienceJson___children___parent___children'
  | 'childrenExperienceJson___children___children'
  | 'childrenExperienceJson___children___children___id'
  | 'childrenExperienceJson___children___children___children'
  | 'childrenExperienceJson___children___internal___content'
  | 'childrenExperienceJson___children___internal___contentDigest'
  | 'childrenExperienceJson___children___internal___description'
  | 'childrenExperienceJson___children___internal___fieldOwners'
  | 'childrenExperienceJson___children___internal___ignoreType'
  | 'childrenExperienceJson___children___internal___mediaType'
  | 'childrenExperienceJson___children___internal___owner'
  | 'childrenExperienceJson___children___internal___type'
  | 'childrenExperienceJson___internal___content'
  | 'childrenExperienceJson___internal___contentDigest'
  | 'childrenExperienceJson___internal___description'
  | 'childrenExperienceJson___internal___fieldOwners'
  | 'childrenExperienceJson___internal___ignoreType'
  | 'childrenExperienceJson___internal___mediaType'
  | 'childrenExperienceJson___internal___owner'
  | 'childrenExperienceJson___internal___type'
  | 'childrenExperienceJson___dataId'
  | 'childrenExperienceJson___type'
  | 'childrenExperienceJson___logo___sourceInstanceName'
  | 'childrenExperienceJson___logo___absolutePath'
  | 'childrenExperienceJson___logo___relativePath'
  | 'childrenExperienceJson___logo___extension'
  | 'childrenExperienceJson___logo___size'
  | 'childrenExperienceJson___logo___prettySize'
  | 'childrenExperienceJson___logo___modifiedTime'
  | 'childrenExperienceJson___logo___accessTime'
  | 'childrenExperienceJson___logo___changeTime'
  | 'childrenExperienceJson___logo___birthTime'
  | 'childrenExperienceJson___logo___root'
  | 'childrenExperienceJson___logo___dir'
  | 'childrenExperienceJson___logo___base'
  | 'childrenExperienceJson___logo___ext'
  | 'childrenExperienceJson___logo___name'
  | 'childrenExperienceJson___logo___relativeDirectory'
  | 'childrenExperienceJson___logo___dev'
  | 'childrenExperienceJson___logo___mode'
  | 'childrenExperienceJson___logo___nlink'
  | 'childrenExperienceJson___logo___uid'
  | 'childrenExperienceJson___logo___gid'
  | 'childrenExperienceJson___logo___rdev'
  | 'childrenExperienceJson___logo___ino'
  | 'childrenExperienceJson___logo___atimeMs'
  | 'childrenExperienceJson___logo___mtimeMs'
  | 'childrenExperienceJson___logo___ctimeMs'
  | 'childrenExperienceJson___logo___atime'
  | 'childrenExperienceJson___logo___mtime'
  | 'childrenExperienceJson___logo___ctime'
  | 'childrenExperienceJson___logo___birthtime'
  | 'childrenExperienceJson___logo___birthtimeMs'
  | 'childrenExperienceJson___logo___blksize'
  | 'childrenExperienceJson___logo___blocks'
  | 'childrenExperienceJson___logo___publicURL'
  | 'childrenExperienceJson___logo___childrenSkillsJson'
  | 'childrenExperienceJson___logo___childrenSkillsJson___id'
  | 'childrenExperienceJson___logo___childrenSkillsJson___children'
  | 'childrenExperienceJson___logo___childrenSkillsJson___name'
  | 'childrenExperienceJson___logo___childrenSkillsJson___shortName'
  | 'childrenExperienceJson___logo___childrenSkillsJson___type'
  | 'childrenExperienceJson___logo___childrenSkillsJson___description'
  | 'childrenExperienceJson___logo___childrenSkillsJson___startDate'
  | 'childrenExperienceJson___logo___childrenSkillsJson___endDate'
  | 'childrenExperienceJson___logo___childrenSkillsJson___rating'
  | 'childrenExperienceJson___logo___childrenSkillsJson___skillLevel'
  | 'childrenExperienceJson___logo___childrenSkillsJson___link'
  | 'childrenExperienceJson___logo___childSkillsJson___id'
  | 'childrenExperienceJson___logo___childSkillsJson___children'
  | 'childrenExperienceJson___logo___childSkillsJson___name'
  | 'childrenExperienceJson___logo___childSkillsJson___shortName'
  | 'childrenExperienceJson___logo___childSkillsJson___type'
  | 'childrenExperienceJson___logo___childSkillsJson___description'
  | 'childrenExperienceJson___logo___childSkillsJson___startDate'
  | 'childrenExperienceJson___logo___childSkillsJson___endDate'
  | 'childrenExperienceJson___logo___childSkillsJson___rating'
  | 'childrenExperienceJson___logo___childSkillsJson___skillLevel'
  | 'childrenExperienceJson___logo___childSkillsJson___link'
  | 'childrenExperienceJson___logo___childrenShowcasesJson'
  | 'childrenExperienceJson___logo___childrenShowcasesJson___id'
  | 'childrenExperienceJson___logo___childrenShowcasesJson___children'
  | 'childrenExperienceJson___logo___childrenShowcasesJson___title'
  | 'childrenExperienceJson___logo___childrenShowcasesJson___type'
  | 'childrenExperienceJson___logo___childrenShowcasesJson___subtitle'
  | 'childrenExperienceJson___logo___childrenShowcasesJson___authors'
  | 'childrenExperienceJson___logo___childrenShowcasesJson___tags'
  | 'childrenExperienceJson___logo___childrenShowcasesJson___description'
  | 'childrenExperienceJson___logo___childrenShowcasesJson___link'
  | 'childrenExperienceJson___logo___childrenShowcasesJson___sourceCodeLink'
  | 'childrenExperienceJson___logo___childShowcasesJson___id'
  | 'childrenExperienceJson___logo___childShowcasesJson___children'
  | 'childrenExperienceJson___logo___childShowcasesJson___title'
  | 'childrenExperienceJson___logo___childShowcasesJson___type'
  | 'childrenExperienceJson___logo___childShowcasesJson___subtitle'
  | 'childrenExperienceJson___logo___childShowcasesJson___authors'
  | 'childrenExperienceJson___logo___childShowcasesJson___tags'
  | 'childrenExperienceJson___logo___childShowcasesJson___description'
  | 'childrenExperienceJson___logo___childShowcasesJson___link'
  | 'childrenExperienceJson___logo___childShowcasesJson___sourceCodeLink'
  | 'childrenExperienceJson___logo___childrenExperienceJson'
  | 'childrenExperienceJson___logo___childrenExperienceJson___id'
  | 'childrenExperienceJson___logo___childrenExperienceJson___children'
  | 'childrenExperienceJson___logo___childrenExperienceJson___dataId'
  | 'childrenExperienceJson___logo___childrenExperienceJson___type'
  | 'childrenExperienceJson___logo___childrenExperienceJson___title'
  | 'childrenExperienceJson___logo___childrenExperienceJson___subtitle'
  | 'childrenExperienceJson___logo___childrenExperienceJson___startDate'
  | 'childrenExperienceJson___logo___childrenExperienceJson___endDate'
  | 'childrenExperienceJson___logo___childrenExperienceJson___description'
  | 'childrenExperienceJson___logo___childExperienceJson___id'
  | 'childrenExperienceJson___logo___childExperienceJson___children'
  | 'childrenExperienceJson___logo___childExperienceJson___dataId'
  | 'childrenExperienceJson___logo___childExperienceJson___type'
  | 'childrenExperienceJson___logo___childExperienceJson___title'
  | 'childrenExperienceJson___logo___childExperienceJson___subtitle'
  | 'childrenExperienceJson___logo___childExperienceJson___startDate'
  | 'childrenExperienceJson___logo___childExperienceJson___endDate'
  | 'childrenExperienceJson___logo___childExperienceJson___description'
  | 'childrenExperienceJson___logo___childrenAboutMeJson'
  | 'childrenExperienceJson___logo___childrenAboutMeJson___id'
  | 'childrenExperienceJson___logo___childrenAboutMeJson___children'
  | 'childrenExperienceJson___logo___childrenAboutMeJson___dataId'
  | 'childrenExperienceJson___logo___childrenAboutMeJson___title'
  | 'childrenExperienceJson___logo___childrenAboutMeJson___description'
  | 'childrenExperienceJson___logo___childrenAboutMeJson___shortDescription'
  | 'childrenExperienceJson___logo___childrenAboutMeJson___downloadResumeLabel'
  | 'childrenExperienceJson___logo___childrenAboutMeJson___contactLabel'
  | 'childrenExperienceJson___logo___childAboutMeJson___id'
  | 'childrenExperienceJson___logo___childAboutMeJson___children'
  | 'childrenExperienceJson___logo___childAboutMeJson___dataId'
  | 'childrenExperienceJson___logo___childAboutMeJson___title'
  | 'childrenExperienceJson___logo___childAboutMeJson___description'
  | 'childrenExperienceJson___logo___childAboutMeJson___shortDescription'
  | 'childrenExperienceJson___logo___childAboutMeJson___downloadResumeLabel'
  | 'childrenExperienceJson___logo___childAboutMeJson___contactLabel'
  | 'childrenExperienceJson___logo___id'
  | 'childrenExperienceJson___logo___parent___id'
  | 'childrenExperienceJson___logo___parent___children'
  | 'childrenExperienceJson___logo___children'
  | 'childrenExperienceJson___logo___children___id'
  | 'childrenExperienceJson___logo___children___children'
  | 'childrenExperienceJson___logo___internal___content'
  | 'childrenExperienceJson___logo___internal___contentDigest'
  | 'childrenExperienceJson___logo___internal___description'
  | 'childrenExperienceJson___logo___internal___fieldOwners'
  | 'childrenExperienceJson___logo___internal___ignoreType'
  | 'childrenExperienceJson___logo___internal___mediaType'
  | 'childrenExperienceJson___logo___internal___owner'
  | 'childrenExperienceJson___logo___internal___type'
  | 'childrenExperienceJson___title'
  | 'childrenExperienceJson___subtitle'
  | 'childrenExperienceJson___startDate'
  | 'childrenExperienceJson___endDate'
  | 'childrenExperienceJson___description'
  | 'childExperienceJson___id'
  | 'childExperienceJson___parent___id'
  | 'childExperienceJson___parent___parent___id'
  | 'childExperienceJson___parent___parent___children'
  | 'childExperienceJson___parent___children'
  | 'childExperienceJson___parent___children___id'
  | 'childExperienceJson___parent___children___children'
  | 'childExperienceJson___parent___internal___content'
  | 'childExperienceJson___parent___internal___contentDigest'
  | 'childExperienceJson___parent___internal___description'
  | 'childExperienceJson___parent___internal___fieldOwners'
  | 'childExperienceJson___parent___internal___ignoreType'
  | 'childExperienceJson___parent___internal___mediaType'
  | 'childExperienceJson___parent___internal___owner'
  | 'childExperienceJson___parent___internal___type'
  | 'childExperienceJson___children'
  | 'childExperienceJson___children___id'
  | 'childExperienceJson___children___parent___id'
  | 'childExperienceJson___children___parent___children'
  | 'childExperienceJson___children___children'
  | 'childExperienceJson___children___children___id'
  | 'childExperienceJson___children___children___children'
  | 'childExperienceJson___children___internal___content'
  | 'childExperienceJson___children___internal___contentDigest'
  | 'childExperienceJson___children___internal___description'
  | 'childExperienceJson___children___internal___fieldOwners'
  | 'childExperienceJson___children___internal___ignoreType'
  | 'childExperienceJson___children___internal___mediaType'
  | 'childExperienceJson___children___internal___owner'
  | 'childExperienceJson___children___internal___type'
  | 'childExperienceJson___internal___content'
  | 'childExperienceJson___internal___contentDigest'
  | 'childExperienceJson___internal___description'
  | 'childExperienceJson___internal___fieldOwners'
  | 'childExperienceJson___internal___ignoreType'
  | 'childExperienceJson___internal___mediaType'
  | 'childExperienceJson___internal___owner'
  | 'childExperienceJson___internal___type'
  | 'childExperienceJson___dataId'
  | 'childExperienceJson___type'
  | 'childExperienceJson___logo___sourceInstanceName'
  | 'childExperienceJson___logo___absolutePath'
  | 'childExperienceJson___logo___relativePath'
  | 'childExperienceJson___logo___extension'
  | 'childExperienceJson___logo___size'
  | 'childExperienceJson___logo___prettySize'
  | 'childExperienceJson___logo___modifiedTime'
  | 'childExperienceJson___logo___accessTime'
  | 'childExperienceJson___logo___changeTime'
  | 'childExperienceJson___logo___birthTime'
  | 'childExperienceJson___logo___root'
  | 'childExperienceJson___logo___dir'
  | 'childExperienceJson___logo___base'
  | 'childExperienceJson___logo___ext'
  | 'childExperienceJson___logo___name'
  | 'childExperienceJson___logo___relativeDirectory'
  | 'childExperienceJson___logo___dev'
  | 'childExperienceJson___logo___mode'
  | 'childExperienceJson___logo___nlink'
  | 'childExperienceJson___logo___uid'
  | 'childExperienceJson___logo___gid'
  | 'childExperienceJson___logo___rdev'
  | 'childExperienceJson___logo___ino'
  | 'childExperienceJson___logo___atimeMs'
  | 'childExperienceJson___logo___mtimeMs'
  | 'childExperienceJson___logo___ctimeMs'
  | 'childExperienceJson___logo___atime'
  | 'childExperienceJson___logo___mtime'
  | 'childExperienceJson___logo___ctime'
  | 'childExperienceJson___logo___birthtime'
  | 'childExperienceJson___logo___birthtimeMs'
  | 'childExperienceJson___logo___blksize'
  | 'childExperienceJson___logo___blocks'
  | 'childExperienceJson___logo___publicURL'
  | 'childExperienceJson___logo___childrenSkillsJson'
  | 'childExperienceJson___logo___childrenSkillsJson___id'
  | 'childExperienceJson___logo___childrenSkillsJson___children'
  | 'childExperienceJson___logo___childrenSkillsJson___name'
  | 'childExperienceJson___logo___childrenSkillsJson___shortName'
  | 'childExperienceJson___logo___childrenSkillsJson___type'
  | 'childExperienceJson___logo___childrenSkillsJson___description'
  | 'childExperienceJson___logo___childrenSkillsJson___startDate'
  | 'childExperienceJson___logo___childrenSkillsJson___endDate'
  | 'childExperienceJson___logo___childrenSkillsJson___rating'
  | 'childExperienceJson___logo___childrenSkillsJson___skillLevel'
  | 'childExperienceJson___logo___childrenSkillsJson___link'
  | 'childExperienceJson___logo___childSkillsJson___id'
  | 'childExperienceJson___logo___childSkillsJson___children'
  | 'childExperienceJson___logo___childSkillsJson___name'
  | 'childExperienceJson___logo___childSkillsJson___shortName'
  | 'childExperienceJson___logo___childSkillsJson___type'
  | 'childExperienceJson___logo___childSkillsJson___description'
  | 'childExperienceJson___logo___childSkillsJson___startDate'
  | 'childExperienceJson___logo___childSkillsJson___endDate'
  | 'childExperienceJson___logo___childSkillsJson___rating'
  | 'childExperienceJson___logo___childSkillsJson___skillLevel'
  | 'childExperienceJson___logo___childSkillsJson___link'
  | 'childExperienceJson___logo___childrenShowcasesJson'
  | 'childExperienceJson___logo___childrenShowcasesJson___id'
  | 'childExperienceJson___logo___childrenShowcasesJson___children'
  | 'childExperienceJson___logo___childrenShowcasesJson___title'
  | 'childExperienceJson___logo___childrenShowcasesJson___type'
  | 'childExperienceJson___logo___childrenShowcasesJson___subtitle'
  | 'childExperienceJson___logo___childrenShowcasesJson___authors'
  | 'childExperienceJson___logo___childrenShowcasesJson___tags'
  | 'childExperienceJson___logo___childrenShowcasesJson___description'
  | 'childExperienceJson___logo___childrenShowcasesJson___link'
  | 'childExperienceJson___logo___childrenShowcasesJson___sourceCodeLink'
  | 'childExperienceJson___logo___childShowcasesJson___id'
  | 'childExperienceJson___logo___childShowcasesJson___children'
  | 'childExperienceJson___logo___childShowcasesJson___title'
  | 'childExperienceJson___logo___childShowcasesJson___type'
  | 'childExperienceJson___logo___childShowcasesJson___subtitle'
  | 'childExperienceJson___logo___childShowcasesJson___authors'
  | 'childExperienceJson___logo___childShowcasesJson___tags'
  | 'childExperienceJson___logo___childShowcasesJson___description'
  | 'childExperienceJson___logo___childShowcasesJson___link'
  | 'childExperienceJson___logo___childShowcasesJson___sourceCodeLink'
  | 'childExperienceJson___logo___childrenExperienceJson'
  | 'childExperienceJson___logo___childrenExperienceJson___id'
  | 'childExperienceJson___logo___childrenExperienceJson___children'
  | 'childExperienceJson___logo___childrenExperienceJson___dataId'
  | 'childExperienceJson___logo___childrenExperienceJson___type'
  | 'childExperienceJson___logo___childrenExperienceJson___title'
  | 'childExperienceJson___logo___childrenExperienceJson___subtitle'
  | 'childExperienceJson___logo___childrenExperienceJson___startDate'
  | 'childExperienceJson___logo___childrenExperienceJson___endDate'
  | 'childExperienceJson___logo___childrenExperienceJson___description'
  | 'childExperienceJson___logo___childExperienceJson___id'
  | 'childExperienceJson___logo___childExperienceJson___children'
  | 'childExperienceJson___logo___childExperienceJson___dataId'
  | 'childExperienceJson___logo___childExperienceJson___type'
  | 'childExperienceJson___logo___childExperienceJson___title'
  | 'childExperienceJson___logo___childExperienceJson___subtitle'
  | 'childExperienceJson___logo___childExperienceJson___startDate'
  | 'childExperienceJson___logo___childExperienceJson___endDate'
  | 'childExperienceJson___logo___childExperienceJson___description'
  | 'childExperienceJson___logo___childrenAboutMeJson'
  | 'childExperienceJson___logo___childrenAboutMeJson___id'
  | 'childExperienceJson___logo___childrenAboutMeJson___children'
  | 'childExperienceJson___logo___childrenAboutMeJson___dataId'
  | 'childExperienceJson___logo___childrenAboutMeJson___title'
  | 'childExperienceJson___logo___childrenAboutMeJson___description'
  | 'childExperienceJson___logo___childrenAboutMeJson___shortDescription'
  | 'childExperienceJson___logo___childrenAboutMeJson___downloadResumeLabel'
  | 'childExperienceJson___logo___childrenAboutMeJson___contactLabel'
  | 'childExperienceJson___logo___childAboutMeJson___id'
  | 'childExperienceJson___logo___childAboutMeJson___children'
  | 'childExperienceJson___logo___childAboutMeJson___dataId'
  | 'childExperienceJson___logo___childAboutMeJson___title'
  | 'childExperienceJson___logo___childAboutMeJson___description'
  | 'childExperienceJson___logo___childAboutMeJson___shortDescription'
  | 'childExperienceJson___logo___childAboutMeJson___downloadResumeLabel'
  | 'childExperienceJson___logo___childAboutMeJson___contactLabel'
  | 'childExperienceJson___logo___id'
  | 'childExperienceJson___logo___parent___id'
  | 'childExperienceJson___logo___parent___children'
  | 'childExperienceJson___logo___children'
  | 'childExperienceJson___logo___children___id'
  | 'childExperienceJson___logo___children___children'
  | 'childExperienceJson___logo___internal___content'
  | 'childExperienceJson___logo___internal___contentDigest'
  | 'childExperienceJson___logo___internal___description'
  | 'childExperienceJson___logo___internal___fieldOwners'
  | 'childExperienceJson___logo___internal___ignoreType'
  | 'childExperienceJson___logo___internal___mediaType'
  | 'childExperienceJson___logo___internal___owner'
  | 'childExperienceJson___logo___internal___type'
  | 'childExperienceJson___title'
  | 'childExperienceJson___subtitle'
  | 'childExperienceJson___startDate'
  | 'childExperienceJson___endDate'
  | 'childExperienceJson___description'
  | 'childrenAboutMeJson'
  | 'childrenAboutMeJson___id'
  | 'childrenAboutMeJson___parent___id'
  | 'childrenAboutMeJson___parent___parent___id'
  | 'childrenAboutMeJson___parent___parent___children'
  | 'childrenAboutMeJson___parent___children'
  | 'childrenAboutMeJson___parent___children___id'
  | 'childrenAboutMeJson___parent___children___children'
  | 'childrenAboutMeJson___parent___internal___content'
  | 'childrenAboutMeJson___parent___internal___contentDigest'
  | 'childrenAboutMeJson___parent___internal___description'
  | 'childrenAboutMeJson___parent___internal___fieldOwners'
  | 'childrenAboutMeJson___parent___internal___ignoreType'
  | 'childrenAboutMeJson___parent___internal___mediaType'
  | 'childrenAboutMeJson___parent___internal___owner'
  | 'childrenAboutMeJson___parent___internal___type'
  | 'childrenAboutMeJson___children'
  | 'childrenAboutMeJson___children___id'
  | 'childrenAboutMeJson___children___parent___id'
  | 'childrenAboutMeJson___children___parent___children'
  | 'childrenAboutMeJson___children___children'
  | 'childrenAboutMeJson___children___children___id'
  | 'childrenAboutMeJson___children___children___children'
  | 'childrenAboutMeJson___children___internal___content'
  | 'childrenAboutMeJson___children___internal___contentDigest'
  | 'childrenAboutMeJson___children___internal___description'
  | 'childrenAboutMeJson___children___internal___fieldOwners'
  | 'childrenAboutMeJson___children___internal___ignoreType'
  | 'childrenAboutMeJson___children___internal___mediaType'
  | 'childrenAboutMeJson___children___internal___owner'
  | 'childrenAboutMeJson___children___internal___type'
  | 'childrenAboutMeJson___internal___content'
  | 'childrenAboutMeJson___internal___contentDigest'
  | 'childrenAboutMeJson___internal___description'
  | 'childrenAboutMeJson___internal___fieldOwners'
  | 'childrenAboutMeJson___internal___ignoreType'
  | 'childrenAboutMeJson___internal___mediaType'
  | 'childrenAboutMeJson___internal___owner'
  | 'childrenAboutMeJson___internal___type'
  | 'childrenAboutMeJson___dataId'
  | 'childrenAboutMeJson___title'
  | 'childrenAboutMeJson___description'
  | 'childrenAboutMeJson___shortDescription'
  | 'childrenAboutMeJson___urls___gravatar'
  | 'childrenAboutMeJson___urls___portfolioPdf___sourceInstanceName'
  | 'childrenAboutMeJson___urls___portfolioPdf___absolutePath'
  | 'childrenAboutMeJson___urls___portfolioPdf___relativePath'
  | 'childrenAboutMeJson___urls___portfolioPdf___extension'
  | 'childrenAboutMeJson___urls___portfolioPdf___size'
  | 'childrenAboutMeJson___urls___portfolioPdf___prettySize'
  | 'childrenAboutMeJson___urls___portfolioPdf___modifiedTime'
  | 'childrenAboutMeJson___urls___portfolioPdf___accessTime'
  | 'childrenAboutMeJson___urls___portfolioPdf___changeTime'
  | 'childrenAboutMeJson___urls___portfolioPdf___birthTime'
  | 'childrenAboutMeJson___urls___portfolioPdf___root'
  | 'childrenAboutMeJson___urls___portfolioPdf___dir'
  | 'childrenAboutMeJson___urls___portfolioPdf___base'
  | 'childrenAboutMeJson___urls___portfolioPdf___ext'
  | 'childrenAboutMeJson___urls___portfolioPdf___name'
  | 'childrenAboutMeJson___urls___portfolioPdf___relativeDirectory'
  | 'childrenAboutMeJson___urls___portfolioPdf___dev'
  | 'childrenAboutMeJson___urls___portfolioPdf___mode'
  | 'childrenAboutMeJson___urls___portfolioPdf___nlink'
  | 'childrenAboutMeJson___urls___portfolioPdf___uid'
  | 'childrenAboutMeJson___urls___portfolioPdf___gid'
  | 'childrenAboutMeJson___urls___portfolioPdf___rdev'
  | 'childrenAboutMeJson___urls___portfolioPdf___ino'
  | 'childrenAboutMeJson___urls___portfolioPdf___atimeMs'
  | 'childrenAboutMeJson___urls___portfolioPdf___mtimeMs'
  | 'childrenAboutMeJson___urls___portfolioPdf___ctimeMs'
  | 'childrenAboutMeJson___urls___portfolioPdf___atime'
  | 'childrenAboutMeJson___urls___portfolioPdf___mtime'
  | 'childrenAboutMeJson___urls___portfolioPdf___ctime'
  | 'childrenAboutMeJson___urls___portfolioPdf___birthtime'
  | 'childrenAboutMeJson___urls___portfolioPdf___birthtimeMs'
  | 'childrenAboutMeJson___urls___portfolioPdf___blksize'
  | 'childrenAboutMeJson___urls___portfolioPdf___blocks'
  | 'childrenAboutMeJson___urls___portfolioPdf___publicURL'
  | 'childrenAboutMeJson___urls___portfolioPdf___childrenSkillsJson'
  | 'childrenAboutMeJson___urls___portfolioPdf___childrenShowcasesJson'
  | 'childrenAboutMeJson___urls___portfolioPdf___childrenExperienceJson'
  | 'childrenAboutMeJson___urls___portfolioPdf___childrenAboutMeJson'
  | 'childrenAboutMeJson___urls___portfolioPdf___id'
  | 'childrenAboutMeJson___urls___portfolioPdf___children'
  | 'childrenAboutMeJson___contactDetails___label'
  | 'childrenAboutMeJson___contactDetails___name'
  | 'childrenAboutMeJson___contactDetails___zip'
  | 'childrenAboutMeJson___contactDetails___city'
  | 'childrenAboutMeJson___contactDetails___country'
  | 'childrenAboutMeJson___contactDetails___email'
  | 'childrenAboutMeJson___downloadResumeLabel'
  | 'childrenAboutMeJson___contactLabel'
  | 'childAboutMeJson___id'
  | 'childAboutMeJson___parent___id'
  | 'childAboutMeJson___parent___parent___id'
  | 'childAboutMeJson___parent___parent___children'
  | 'childAboutMeJson___parent___children'
  | 'childAboutMeJson___parent___children___id'
  | 'childAboutMeJson___parent___children___children'
  | 'childAboutMeJson___parent___internal___content'
  | 'childAboutMeJson___parent___internal___contentDigest'
  | 'childAboutMeJson___parent___internal___description'
  | 'childAboutMeJson___parent___internal___fieldOwners'
  | 'childAboutMeJson___parent___internal___ignoreType'
  | 'childAboutMeJson___parent___internal___mediaType'
  | 'childAboutMeJson___parent___internal___owner'
  | 'childAboutMeJson___parent___internal___type'
  | 'childAboutMeJson___children'
  | 'childAboutMeJson___children___id'
  | 'childAboutMeJson___children___parent___id'
  | 'childAboutMeJson___children___parent___children'
  | 'childAboutMeJson___children___children'
  | 'childAboutMeJson___children___children___id'
  | 'childAboutMeJson___children___children___children'
  | 'childAboutMeJson___children___internal___content'
  | 'childAboutMeJson___children___internal___contentDigest'
  | 'childAboutMeJson___children___internal___description'
  | 'childAboutMeJson___children___internal___fieldOwners'
  | 'childAboutMeJson___children___internal___ignoreType'
  | 'childAboutMeJson___children___internal___mediaType'
  | 'childAboutMeJson___children___internal___owner'
  | 'childAboutMeJson___children___internal___type'
  | 'childAboutMeJson___internal___content'
  | 'childAboutMeJson___internal___contentDigest'
  | 'childAboutMeJson___internal___description'
  | 'childAboutMeJson___internal___fieldOwners'
  | 'childAboutMeJson___internal___ignoreType'
  | 'childAboutMeJson___internal___mediaType'
  | 'childAboutMeJson___internal___owner'
  | 'childAboutMeJson___internal___type'
  | 'childAboutMeJson___dataId'
  | 'childAboutMeJson___title'
  | 'childAboutMeJson___description'
  | 'childAboutMeJson___shortDescription'
  | 'childAboutMeJson___urls___gravatar'
  | 'childAboutMeJson___urls___portfolioPdf___sourceInstanceName'
  | 'childAboutMeJson___urls___portfolioPdf___absolutePath'
  | 'childAboutMeJson___urls___portfolioPdf___relativePath'
  | 'childAboutMeJson___urls___portfolioPdf___extension'
  | 'childAboutMeJson___urls___portfolioPdf___size'
  | 'childAboutMeJson___urls___portfolioPdf___prettySize'
  | 'childAboutMeJson___urls___portfolioPdf___modifiedTime'
  | 'childAboutMeJson___urls___portfolioPdf___accessTime'
  | 'childAboutMeJson___urls___portfolioPdf___changeTime'
  | 'childAboutMeJson___urls___portfolioPdf___birthTime'
  | 'childAboutMeJson___urls___portfolioPdf___root'
  | 'childAboutMeJson___urls___portfolioPdf___dir'
  | 'childAboutMeJson___urls___portfolioPdf___base'
  | 'childAboutMeJson___urls___portfolioPdf___ext'
  | 'childAboutMeJson___urls___portfolioPdf___name'
  | 'childAboutMeJson___urls___portfolioPdf___relativeDirectory'
  | 'childAboutMeJson___urls___portfolioPdf___dev'
  | 'childAboutMeJson___urls___portfolioPdf___mode'
  | 'childAboutMeJson___urls___portfolioPdf___nlink'
  | 'childAboutMeJson___urls___portfolioPdf___uid'
  | 'childAboutMeJson___urls___portfolioPdf___gid'
  | 'childAboutMeJson___urls___portfolioPdf___rdev'
  | 'childAboutMeJson___urls___portfolioPdf___ino'
  | 'childAboutMeJson___urls___portfolioPdf___atimeMs'
  | 'childAboutMeJson___urls___portfolioPdf___mtimeMs'
  | 'childAboutMeJson___urls___portfolioPdf___ctimeMs'
  | 'childAboutMeJson___urls___portfolioPdf___atime'
  | 'childAboutMeJson___urls___portfolioPdf___mtime'
  | 'childAboutMeJson___urls___portfolioPdf___ctime'
  | 'childAboutMeJson___urls___portfolioPdf___birthtime'
  | 'childAboutMeJson___urls___portfolioPdf___birthtimeMs'
  | 'childAboutMeJson___urls___portfolioPdf___blksize'
  | 'childAboutMeJson___urls___portfolioPdf___blocks'
  | 'childAboutMeJson___urls___portfolioPdf___publicURL'
  | 'childAboutMeJson___urls___portfolioPdf___childrenSkillsJson'
  | 'childAboutMeJson___urls___portfolioPdf___childrenShowcasesJson'
  | 'childAboutMeJson___urls___portfolioPdf___childrenExperienceJson'
  | 'childAboutMeJson___urls___portfolioPdf___childrenAboutMeJson'
  | 'childAboutMeJson___urls___portfolioPdf___id'
  | 'childAboutMeJson___urls___portfolioPdf___children'
  | 'childAboutMeJson___contactDetails___label'
  | 'childAboutMeJson___contactDetails___name'
  | 'childAboutMeJson___contactDetails___zip'
  | 'childAboutMeJson___contactDetails___city'
  | 'childAboutMeJson___contactDetails___country'
  | 'childAboutMeJson___contactDetails___email'
  | 'childAboutMeJson___downloadResumeLabel'
  | 'childAboutMeJson___contactLabel'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
};

export type SiteFlagsFilterInput = {
  FAST_DEV?: Maybe<BooleanQueryOperatorInput>;
  PRESERVE_WEBPACK_CACHE?: Maybe<BooleanQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___author'
  | 'flags___FAST_DEV'
  | 'flags___PRESERVE_WEBPACK_CACHE'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  flags?: Maybe<SiteFlagsFilterInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteFunctionFilterInput = {
  functionRoute?: Maybe<StringQueryOperatorInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  fields?: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  crossOrigin?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  implementation?: Maybe<SitePluginPluginOptionsImplementationFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  svgProps?: Maybe<SitePluginPluginOptionsSvgPropsFilterInput>;
  headers?: Maybe<SitePluginPluginOptionsHeadersFilterInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsImplementationFilterInput = {
  info?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSvgPropsFilterInput = {
  className?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsHeadersFilterInput = {
  _x?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___short_name'
  | 'pluginCreator___pluginOptions___start_url'
  | 'pluginCreator___pluginOptions___background_color'
  | 'pluginCreator___pluginOptions___theme_color'
  | 'pluginCreator___pluginOptions___display'
  | 'pluginCreator___pluginOptions___legacy'
  | 'pluginCreator___pluginOptions___theme_color_in_head'
  | 'pluginCreator___pluginOptions___cache_busting_mode'
  | 'pluginCreator___pluginOptions___crossOrigin'
  | 'pluginCreator___pluginOptions___include_favicon'
  | 'pluginCreator___pluginOptions___cacheDigest'
  | 'pluginCreator___pluginOptions___implementation___info'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___svgProps___className'
  | 'pluginCreator___pluginOptions___headers____x'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___pluginOptions___allExtensions'
  | 'pluginCreator___pluginOptions___isTSX'
  | 'pluginCreator___pluginOptions___jsxPragma'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId';

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SkillsJsonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SkillsJsonEdge>;
  nodes: Array<SkillsJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SkillsJsonGroupConnection>;
};


export type SkillsJsonConnectionDistinctArgs = {
  field: SkillsJsonFieldsEnum;
};


export type SkillsJsonConnectionMaxArgs = {
  field: SkillsJsonFieldsEnum;
};


export type SkillsJsonConnectionMinArgs = {
  field: SkillsJsonFieldsEnum;
};


export type SkillsJsonConnectionSumArgs = {
  field: SkillsJsonFieldsEnum;
};


export type SkillsJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SkillsJsonFieldsEnum;
};

export type SkillsJsonEdge = {
  next?: Maybe<SkillsJson>;
  node: SkillsJson;
  previous?: Maybe<SkillsJson>;
};

export type SkillsJsonFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'shortName'
  | 'type'
  | 'description'
  | 'startDate'
  | 'endDate'
  | 'logo___sourceInstanceName'
  | 'logo___absolutePath'
  | 'logo___relativePath'
  | 'logo___extension'
  | 'logo___size'
  | 'logo___prettySize'
  | 'logo___modifiedTime'
  | 'logo___accessTime'
  | 'logo___changeTime'
  | 'logo___birthTime'
  | 'logo___root'
  | 'logo___dir'
  | 'logo___base'
  | 'logo___ext'
  | 'logo___name'
  | 'logo___relativeDirectory'
  | 'logo___dev'
  | 'logo___mode'
  | 'logo___nlink'
  | 'logo___uid'
  | 'logo___gid'
  | 'logo___rdev'
  | 'logo___ino'
  | 'logo___atimeMs'
  | 'logo___mtimeMs'
  | 'logo___ctimeMs'
  | 'logo___atime'
  | 'logo___mtime'
  | 'logo___ctime'
  | 'logo___birthtime'
  | 'logo___birthtimeMs'
  | 'logo___blksize'
  | 'logo___blocks'
  | 'logo___publicURL'
  | 'logo___childrenSkillsJson'
  | 'logo___childrenSkillsJson___id'
  | 'logo___childrenSkillsJson___parent___id'
  | 'logo___childrenSkillsJson___parent___children'
  | 'logo___childrenSkillsJson___children'
  | 'logo___childrenSkillsJson___children___id'
  | 'logo___childrenSkillsJson___children___children'
  | 'logo___childrenSkillsJson___internal___content'
  | 'logo___childrenSkillsJson___internal___contentDigest'
  | 'logo___childrenSkillsJson___internal___description'
  | 'logo___childrenSkillsJson___internal___fieldOwners'
  | 'logo___childrenSkillsJson___internal___ignoreType'
  | 'logo___childrenSkillsJson___internal___mediaType'
  | 'logo___childrenSkillsJson___internal___owner'
  | 'logo___childrenSkillsJson___internal___type'
  | 'logo___childrenSkillsJson___name'
  | 'logo___childrenSkillsJson___shortName'
  | 'logo___childrenSkillsJson___type'
  | 'logo___childrenSkillsJson___description'
  | 'logo___childrenSkillsJson___startDate'
  | 'logo___childrenSkillsJson___endDate'
  | 'logo___childrenSkillsJson___logo___sourceInstanceName'
  | 'logo___childrenSkillsJson___logo___absolutePath'
  | 'logo___childrenSkillsJson___logo___relativePath'
  | 'logo___childrenSkillsJson___logo___extension'
  | 'logo___childrenSkillsJson___logo___size'
  | 'logo___childrenSkillsJson___logo___prettySize'
  | 'logo___childrenSkillsJson___logo___modifiedTime'
  | 'logo___childrenSkillsJson___logo___accessTime'
  | 'logo___childrenSkillsJson___logo___changeTime'
  | 'logo___childrenSkillsJson___logo___birthTime'
  | 'logo___childrenSkillsJson___logo___root'
  | 'logo___childrenSkillsJson___logo___dir'
  | 'logo___childrenSkillsJson___logo___base'
  | 'logo___childrenSkillsJson___logo___ext'
  | 'logo___childrenSkillsJson___logo___name'
  | 'logo___childrenSkillsJson___logo___relativeDirectory'
  | 'logo___childrenSkillsJson___logo___dev'
  | 'logo___childrenSkillsJson___logo___mode'
  | 'logo___childrenSkillsJson___logo___nlink'
  | 'logo___childrenSkillsJson___logo___uid'
  | 'logo___childrenSkillsJson___logo___gid'
  | 'logo___childrenSkillsJson___logo___rdev'
  | 'logo___childrenSkillsJson___logo___ino'
  | 'logo___childrenSkillsJson___logo___atimeMs'
  | 'logo___childrenSkillsJson___logo___mtimeMs'
  | 'logo___childrenSkillsJson___logo___ctimeMs'
  | 'logo___childrenSkillsJson___logo___atime'
  | 'logo___childrenSkillsJson___logo___mtime'
  | 'logo___childrenSkillsJson___logo___ctime'
  | 'logo___childrenSkillsJson___logo___birthtime'
  | 'logo___childrenSkillsJson___logo___birthtimeMs'
  | 'logo___childrenSkillsJson___logo___blksize'
  | 'logo___childrenSkillsJson___logo___blocks'
  | 'logo___childrenSkillsJson___logo___publicURL'
  | 'logo___childrenSkillsJson___logo___childrenSkillsJson'
  | 'logo___childrenSkillsJson___logo___childrenShowcasesJson'
  | 'logo___childrenSkillsJson___logo___childrenExperienceJson'
  | 'logo___childrenSkillsJson___logo___childrenAboutMeJson'
  | 'logo___childrenSkillsJson___logo___id'
  | 'logo___childrenSkillsJson___logo___children'
  | 'logo___childrenSkillsJson___rating'
  | 'logo___childrenSkillsJson___skillLevel'
  | 'logo___childrenSkillsJson___link'
  | 'logo___childSkillsJson___id'
  | 'logo___childSkillsJson___parent___id'
  | 'logo___childSkillsJson___parent___children'
  | 'logo___childSkillsJson___children'
  | 'logo___childSkillsJson___children___id'
  | 'logo___childSkillsJson___children___children'
  | 'logo___childSkillsJson___internal___content'
  | 'logo___childSkillsJson___internal___contentDigest'
  | 'logo___childSkillsJson___internal___description'
  | 'logo___childSkillsJson___internal___fieldOwners'
  | 'logo___childSkillsJson___internal___ignoreType'
  | 'logo___childSkillsJson___internal___mediaType'
  | 'logo___childSkillsJson___internal___owner'
  | 'logo___childSkillsJson___internal___type'
  | 'logo___childSkillsJson___name'
  | 'logo___childSkillsJson___shortName'
  | 'logo___childSkillsJson___type'
  | 'logo___childSkillsJson___description'
  | 'logo___childSkillsJson___startDate'
  | 'logo___childSkillsJson___endDate'
  | 'logo___childSkillsJson___logo___sourceInstanceName'
  | 'logo___childSkillsJson___logo___absolutePath'
  | 'logo___childSkillsJson___logo___relativePath'
  | 'logo___childSkillsJson___logo___extension'
  | 'logo___childSkillsJson___logo___size'
  | 'logo___childSkillsJson___logo___prettySize'
  | 'logo___childSkillsJson___logo___modifiedTime'
  | 'logo___childSkillsJson___logo___accessTime'
  | 'logo___childSkillsJson___logo___changeTime'
  | 'logo___childSkillsJson___logo___birthTime'
  | 'logo___childSkillsJson___logo___root'
  | 'logo___childSkillsJson___logo___dir'
  | 'logo___childSkillsJson___logo___base'
  | 'logo___childSkillsJson___logo___ext'
  | 'logo___childSkillsJson___logo___name'
  | 'logo___childSkillsJson___logo___relativeDirectory'
  | 'logo___childSkillsJson___logo___dev'
  | 'logo___childSkillsJson___logo___mode'
  | 'logo___childSkillsJson___logo___nlink'
  | 'logo___childSkillsJson___logo___uid'
  | 'logo___childSkillsJson___logo___gid'
  | 'logo___childSkillsJson___logo___rdev'
  | 'logo___childSkillsJson___logo___ino'
  | 'logo___childSkillsJson___logo___atimeMs'
  | 'logo___childSkillsJson___logo___mtimeMs'
  | 'logo___childSkillsJson___logo___ctimeMs'
  | 'logo___childSkillsJson___logo___atime'
  | 'logo___childSkillsJson___logo___mtime'
  | 'logo___childSkillsJson___logo___ctime'
  | 'logo___childSkillsJson___logo___birthtime'
  | 'logo___childSkillsJson___logo___birthtimeMs'
  | 'logo___childSkillsJson___logo___blksize'
  | 'logo___childSkillsJson___logo___blocks'
  | 'logo___childSkillsJson___logo___publicURL'
  | 'logo___childSkillsJson___logo___childrenSkillsJson'
  | 'logo___childSkillsJson___logo___childrenShowcasesJson'
  | 'logo___childSkillsJson___logo___childrenExperienceJson'
  | 'logo___childSkillsJson___logo___childrenAboutMeJson'
  | 'logo___childSkillsJson___logo___id'
  | 'logo___childSkillsJson___logo___children'
  | 'logo___childSkillsJson___rating'
  | 'logo___childSkillsJson___skillLevel'
  | 'logo___childSkillsJson___link'
  | 'logo___childrenShowcasesJson'
  | 'logo___childrenShowcasesJson___id'
  | 'logo___childrenShowcasesJson___parent___id'
  | 'logo___childrenShowcasesJson___parent___children'
  | 'logo___childrenShowcasesJson___children'
  | 'logo___childrenShowcasesJson___children___id'
  | 'logo___childrenShowcasesJson___children___children'
  | 'logo___childrenShowcasesJson___internal___content'
  | 'logo___childrenShowcasesJson___internal___contentDigest'
  | 'logo___childrenShowcasesJson___internal___description'
  | 'logo___childrenShowcasesJson___internal___fieldOwners'
  | 'logo___childrenShowcasesJson___internal___ignoreType'
  | 'logo___childrenShowcasesJson___internal___mediaType'
  | 'logo___childrenShowcasesJson___internal___owner'
  | 'logo___childrenShowcasesJson___internal___type'
  | 'logo___childrenShowcasesJson___title'
  | 'logo___childrenShowcasesJson___type'
  | 'logo___childrenShowcasesJson___subtitle'
  | 'logo___childrenShowcasesJson___image___sourceInstanceName'
  | 'logo___childrenShowcasesJson___image___absolutePath'
  | 'logo___childrenShowcasesJson___image___relativePath'
  | 'logo___childrenShowcasesJson___image___extension'
  | 'logo___childrenShowcasesJson___image___size'
  | 'logo___childrenShowcasesJson___image___prettySize'
  | 'logo___childrenShowcasesJson___image___modifiedTime'
  | 'logo___childrenShowcasesJson___image___accessTime'
  | 'logo___childrenShowcasesJson___image___changeTime'
  | 'logo___childrenShowcasesJson___image___birthTime'
  | 'logo___childrenShowcasesJson___image___root'
  | 'logo___childrenShowcasesJson___image___dir'
  | 'logo___childrenShowcasesJson___image___base'
  | 'logo___childrenShowcasesJson___image___ext'
  | 'logo___childrenShowcasesJson___image___name'
  | 'logo___childrenShowcasesJson___image___relativeDirectory'
  | 'logo___childrenShowcasesJson___image___dev'
  | 'logo___childrenShowcasesJson___image___mode'
  | 'logo___childrenShowcasesJson___image___nlink'
  | 'logo___childrenShowcasesJson___image___uid'
  | 'logo___childrenShowcasesJson___image___gid'
  | 'logo___childrenShowcasesJson___image___rdev'
  | 'logo___childrenShowcasesJson___image___ino'
  | 'logo___childrenShowcasesJson___image___atimeMs'
  | 'logo___childrenShowcasesJson___image___mtimeMs'
  | 'logo___childrenShowcasesJson___image___ctimeMs'
  | 'logo___childrenShowcasesJson___image___atime'
  | 'logo___childrenShowcasesJson___image___mtime'
  | 'logo___childrenShowcasesJson___image___ctime'
  | 'logo___childrenShowcasesJson___image___birthtime'
  | 'logo___childrenShowcasesJson___image___birthtimeMs'
  | 'logo___childrenShowcasesJson___image___blksize'
  | 'logo___childrenShowcasesJson___image___blocks'
  | 'logo___childrenShowcasesJson___image___publicURL'
  | 'logo___childrenShowcasesJson___image___childrenSkillsJson'
  | 'logo___childrenShowcasesJson___image___childrenShowcasesJson'
  | 'logo___childrenShowcasesJson___image___childrenExperienceJson'
  | 'logo___childrenShowcasesJson___image___childrenAboutMeJson'
  | 'logo___childrenShowcasesJson___image___id'
  | 'logo___childrenShowcasesJson___image___children'
  | 'logo___childrenShowcasesJson___authors'
  | 'logo___childrenShowcasesJson___tags'
  | 'logo___childrenShowcasesJson___description'
  | 'logo___childrenShowcasesJson___link'
  | 'logo___childrenShowcasesJson___sourceCodeLink'
  | 'logo___childrenShowcasesJson___internalLink___sourceInstanceName'
  | 'logo___childrenShowcasesJson___internalLink___absolutePath'
  | 'logo___childrenShowcasesJson___internalLink___relativePath'
  | 'logo___childrenShowcasesJson___internalLink___extension'
  | 'logo___childrenShowcasesJson___internalLink___size'
  | 'logo___childrenShowcasesJson___internalLink___prettySize'
  | 'logo___childrenShowcasesJson___internalLink___modifiedTime'
  | 'logo___childrenShowcasesJson___internalLink___accessTime'
  | 'logo___childrenShowcasesJson___internalLink___changeTime'
  | 'logo___childrenShowcasesJson___internalLink___birthTime'
  | 'logo___childrenShowcasesJson___internalLink___root'
  | 'logo___childrenShowcasesJson___internalLink___dir'
  | 'logo___childrenShowcasesJson___internalLink___base'
  | 'logo___childrenShowcasesJson___internalLink___ext'
  | 'logo___childrenShowcasesJson___internalLink___name'
  | 'logo___childrenShowcasesJson___internalLink___relativeDirectory'
  | 'logo___childrenShowcasesJson___internalLink___dev'
  | 'logo___childrenShowcasesJson___internalLink___mode'
  | 'logo___childrenShowcasesJson___internalLink___nlink'
  | 'logo___childrenShowcasesJson___internalLink___uid'
  | 'logo___childrenShowcasesJson___internalLink___gid'
  | 'logo___childrenShowcasesJson___internalLink___rdev'
  | 'logo___childrenShowcasesJson___internalLink___ino'
  | 'logo___childrenShowcasesJson___internalLink___atimeMs'
  | 'logo___childrenShowcasesJson___internalLink___mtimeMs'
  | 'logo___childrenShowcasesJson___internalLink___ctimeMs'
  | 'logo___childrenShowcasesJson___internalLink___atime'
  | 'logo___childrenShowcasesJson___internalLink___mtime'
  | 'logo___childrenShowcasesJson___internalLink___ctime'
  | 'logo___childrenShowcasesJson___internalLink___birthtime'
  | 'logo___childrenShowcasesJson___internalLink___birthtimeMs'
  | 'logo___childrenShowcasesJson___internalLink___blksize'
  | 'logo___childrenShowcasesJson___internalLink___blocks'
  | 'logo___childrenShowcasesJson___internalLink___publicURL'
  | 'logo___childrenShowcasesJson___internalLink___childrenSkillsJson'
  | 'logo___childrenShowcasesJson___internalLink___childrenShowcasesJson'
  | 'logo___childrenShowcasesJson___internalLink___childrenExperienceJson'
  | 'logo___childrenShowcasesJson___internalLink___childrenAboutMeJson'
  | 'logo___childrenShowcasesJson___internalLink___id'
  | 'logo___childrenShowcasesJson___internalLink___children'
  | 'logo___childShowcasesJson___id'
  | 'logo___childShowcasesJson___parent___id'
  | 'logo___childShowcasesJson___parent___children'
  | 'logo___childShowcasesJson___children'
  | 'logo___childShowcasesJson___children___id'
  | 'logo___childShowcasesJson___children___children'
  | 'logo___childShowcasesJson___internal___content'
  | 'logo___childShowcasesJson___internal___contentDigest'
  | 'logo___childShowcasesJson___internal___description'
  | 'logo___childShowcasesJson___internal___fieldOwners'
  | 'logo___childShowcasesJson___internal___ignoreType'
  | 'logo___childShowcasesJson___internal___mediaType'
  | 'logo___childShowcasesJson___internal___owner'
  | 'logo___childShowcasesJson___internal___type'
  | 'logo___childShowcasesJson___title'
  | 'logo___childShowcasesJson___type'
  | 'logo___childShowcasesJson___subtitle'
  | 'logo___childShowcasesJson___image___sourceInstanceName'
  | 'logo___childShowcasesJson___image___absolutePath'
  | 'logo___childShowcasesJson___image___relativePath'
  | 'logo___childShowcasesJson___image___extension'
  | 'logo___childShowcasesJson___image___size'
  | 'logo___childShowcasesJson___image___prettySize'
  | 'logo___childShowcasesJson___image___modifiedTime'
  | 'logo___childShowcasesJson___image___accessTime'
  | 'logo___childShowcasesJson___image___changeTime'
  | 'logo___childShowcasesJson___image___birthTime'
  | 'logo___childShowcasesJson___image___root'
  | 'logo___childShowcasesJson___image___dir'
  | 'logo___childShowcasesJson___image___base'
  | 'logo___childShowcasesJson___image___ext'
  | 'logo___childShowcasesJson___image___name'
  | 'logo___childShowcasesJson___image___relativeDirectory'
  | 'logo___childShowcasesJson___image___dev'
  | 'logo___childShowcasesJson___image___mode'
  | 'logo___childShowcasesJson___image___nlink'
  | 'logo___childShowcasesJson___image___uid'
  | 'logo___childShowcasesJson___image___gid'
  | 'logo___childShowcasesJson___image___rdev'
  | 'logo___childShowcasesJson___image___ino'
  | 'logo___childShowcasesJson___image___atimeMs'
  | 'logo___childShowcasesJson___image___mtimeMs'
  | 'logo___childShowcasesJson___image___ctimeMs'
  | 'logo___childShowcasesJson___image___atime'
  | 'logo___childShowcasesJson___image___mtime'
  | 'logo___childShowcasesJson___image___ctime'
  | 'logo___childShowcasesJson___image___birthtime'
  | 'logo___childShowcasesJson___image___birthtimeMs'
  | 'logo___childShowcasesJson___image___blksize'
  | 'logo___childShowcasesJson___image___blocks'
  | 'logo___childShowcasesJson___image___publicURL'
  | 'logo___childShowcasesJson___image___childrenSkillsJson'
  | 'logo___childShowcasesJson___image___childrenShowcasesJson'
  | 'logo___childShowcasesJson___image___childrenExperienceJson'
  | 'logo___childShowcasesJson___image___childrenAboutMeJson'
  | 'logo___childShowcasesJson___image___id'
  | 'logo___childShowcasesJson___image___children'
  | 'logo___childShowcasesJson___authors'
  | 'logo___childShowcasesJson___tags'
  | 'logo___childShowcasesJson___description'
  | 'logo___childShowcasesJson___link'
  | 'logo___childShowcasesJson___sourceCodeLink'
  | 'logo___childShowcasesJson___internalLink___sourceInstanceName'
  | 'logo___childShowcasesJson___internalLink___absolutePath'
  | 'logo___childShowcasesJson___internalLink___relativePath'
  | 'logo___childShowcasesJson___internalLink___extension'
  | 'logo___childShowcasesJson___internalLink___size'
  | 'logo___childShowcasesJson___internalLink___prettySize'
  | 'logo___childShowcasesJson___internalLink___modifiedTime'
  | 'logo___childShowcasesJson___internalLink___accessTime'
  | 'logo___childShowcasesJson___internalLink___changeTime'
  | 'logo___childShowcasesJson___internalLink___birthTime'
  | 'logo___childShowcasesJson___internalLink___root'
  | 'logo___childShowcasesJson___internalLink___dir'
  | 'logo___childShowcasesJson___internalLink___base'
  | 'logo___childShowcasesJson___internalLink___ext'
  | 'logo___childShowcasesJson___internalLink___name'
  | 'logo___childShowcasesJson___internalLink___relativeDirectory'
  | 'logo___childShowcasesJson___internalLink___dev'
  | 'logo___childShowcasesJson___internalLink___mode'
  | 'logo___childShowcasesJson___internalLink___nlink'
  | 'logo___childShowcasesJson___internalLink___uid'
  | 'logo___childShowcasesJson___internalLink___gid'
  | 'logo___childShowcasesJson___internalLink___rdev'
  | 'logo___childShowcasesJson___internalLink___ino'
  | 'logo___childShowcasesJson___internalLink___atimeMs'
  | 'logo___childShowcasesJson___internalLink___mtimeMs'
  | 'logo___childShowcasesJson___internalLink___ctimeMs'
  | 'logo___childShowcasesJson___internalLink___atime'
  | 'logo___childShowcasesJson___internalLink___mtime'
  | 'logo___childShowcasesJson___internalLink___ctime'
  | 'logo___childShowcasesJson___internalLink___birthtime'
  | 'logo___childShowcasesJson___internalLink___birthtimeMs'
  | 'logo___childShowcasesJson___internalLink___blksize'
  | 'logo___childShowcasesJson___internalLink___blocks'
  | 'logo___childShowcasesJson___internalLink___publicURL'
  | 'logo___childShowcasesJson___internalLink___childrenSkillsJson'
  | 'logo___childShowcasesJson___internalLink___childrenShowcasesJson'
  | 'logo___childShowcasesJson___internalLink___childrenExperienceJson'
  | 'logo___childShowcasesJson___internalLink___childrenAboutMeJson'
  | 'logo___childShowcasesJson___internalLink___id'
  | 'logo___childShowcasesJson___internalLink___children'
  | 'logo___childrenExperienceJson'
  | 'logo___childrenExperienceJson___id'
  | 'logo___childrenExperienceJson___parent___id'
  | 'logo___childrenExperienceJson___parent___children'
  | 'logo___childrenExperienceJson___children'
  | 'logo___childrenExperienceJson___children___id'
  | 'logo___childrenExperienceJson___children___children'
  | 'logo___childrenExperienceJson___internal___content'
  | 'logo___childrenExperienceJson___internal___contentDigest'
  | 'logo___childrenExperienceJson___internal___description'
  | 'logo___childrenExperienceJson___internal___fieldOwners'
  | 'logo___childrenExperienceJson___internal___ignoreType'
  | 'logo___childrenExperienceJson___internal___mediaType'
  | 'logo___childrenExperienceJson___internal___owner'
  | 'logo___childrenExperienceJson___internal___type'
  | 'logo___childrenExperienceJson___dataId'
  | 'logo___childrenExperienceJson___type'
  | 'logo___childrenExperienceJson___logo___sourceInstanceName'
  | 'logo___childrenExperienceJson___logo___absolutePath'
  | 'logo___childrenExperienceJson___logo___relativePath'
  | 'logo___childrenExperienceJson___logo___extension'
  | 'logo___childrenExperienceJson___logo___size'
  | 'logo___childrenExperienceJson___logo___prettySize'
  | 'logo___childrenExperienceJson___logo___modifiedTime'
  | 'logo___childrenExperienceJson___logo___accessTime'
  | 'logo___childrenExperienceJson___logo___changeTime'
  | 'logo___childrenExperienceJson___logo___birthTime'
  | 'logo___childrenExperienceJson___logo___root'
  | 'logo___childrenExperienceJson___logo___dir'
  | 'logo___childrenExperienceJson___logo___base'
  | 'logo___childrenExperienceJson___logo___ext'
  | 'logo___childrenExperienceJson___logo___name'
  | 'logo___childrenExperienceJson___logo___relativeDirectory'
  | 'logo___childrenExperienceJson___logo___dev'
  | 'logo___childrenExperienceJson___logo___mode'
  | 'logo___childrenExperienceJson___logo___nlink'
  | 'logo___childrenExperienceJson___logo___uid'
  | 'logo___childrenExperienceJson___logo___gid'
  | 'logo___childrenExperienceJson___logo___rdev'
  | 'logo___childrenExperienceJson___logo___ino'
  | 'logo___childrenExperienceJson___logo___atimeMs'
  | 'logo___childrenExperienceJson___logo___mtimeMs'
  | 'logo___childrenExperienceJson___logo___ctimeMs'
  | 'logo___childrenExperienceJson___logo___atime'
  | 'logo___childrenExperienceJson___logo___mtime'
  | 'logo___childrenExperienceJson___logo___ctime'
  | 'logo___childrenExperienceJson___logo___birthtime'
  | 'logo___childrenExperienceJson___logo___birthtimeMs'
  | 'logo___childrenExperienceJson___logo___blksize'
  | 'logo___childrenExperienceJson___logo___blocks'
  | 'logo___childrenExperienceJson___logo___publicURL'
  | 'logo___childrenExperienceJson___logo___childrenSkillsJson'
  | 'logo___childrenExperienceJson___logo___childrenShowcasesJson'
  | 'logo___childrenExperienceJson___logo___childrenExperienceJson'
  | 'logo___childrenExperienceJson___logo___childrenAboutMeJson'
  | 'logo___childrenExperienceJson___logo___id'
  | 'logo___childrenExperienceJson___logo___children'
  | 'logo___childrenExperienceJson___title'
  | 'logo___childrenExperienceJson___subtitle'
  | 'logo___childrenExperienceJson___startDate'
  | 'logo___childrenExperienceJson___endDate'
  | 'logo___childrenExperienceJson___description'
  | 'logo___childExperienceJson___id'
  | 'logo___childExperienceJson___parent___id'
  | 'logo___childExperienceJson___parent___children'
  | 'logo___childExperienceJson___children'
  | 'logo___childExperienceJson___children___id'
  | 'logo___childExperienceJson___children___children'
  | 'logo___childExperienceJson___internal___content'
  | 'logo___childExperienceJson___internal___contentDigest'
  | 'logo___childExperienceJson___internal___description'
  | 'logo___childExperienceJson___internal___fieldOwners'
  | 'logo___childExperienceJson___internal___ignoreType'
  | 'logo___childExperienceJson___internal___mediaType'
  | 'logo___childExperienceJson___internal___owner'
  | 'logo___childExperienceJson___internal___type'
  | 'logo___childExperienceJson___dataId'
  | 'logo___childExperienceJson___type'
  | 'logo___childExperienceJson___logo___sourceInstanceName'
  | 'logo___childExperienceJson___logo___absolutePath'
  | 'logo___childExperienceJson___logo___relativePath'
  | 'logo___childExperienceJson___logo___extension'
  | 'logo___childExperienceJson___logo___size'
  | 'logo___childExperienceJson___logo___prettySize'
  | 'logo___childExperienceJson___logo___modifiedTime'
  | 'logo___childExperienceJson___logo___accessTime'
  | 'logo___childExperienceJson___logo___changeTime'
  | 'logo___childExperienceJson___logo___birthTime'
  | 'logo___childExperienceJson___logo___root'
  | 'logo___childExperienceJson___logo___dir'
  | 'logo___childExperienceJson___logo___base'
  | 'logo___childExperienceJson___logo___ext'
  | 'logo___childExperienceJson___logo___name'
  | 'logo___childExperienceJson___logo___relativeDirectory'
  | 'logo___childExperienceJson___logo___dev'
  | 'logo___childExperienceJson___logo___mode'
  | 'logo___childExperienceJson___logo___nlink'
  | 'logo___childExperienceJson___logo___uid'
  | 'logo___childExperienceJson___logo___gid'
  | 'logo___childExperienceJson___logo___rdev'
  | 'logo___childExperienceJson___logo___ino'
  | 'logo___childExperienceJson___logo___atimeMs'
  | 'logo___childExperienceJson___logo___mtimeMs'
  | 'logo___childExperienceJson___logo___ctimeMs'
  | 'logo___childExperienceJson___logo___atime'
  | 'logo___childExperienceJson___logo___mtime'
  | 'logo___childExperienceJson___logo___ctime'
  | 'logo___childExperienceJson___logo___birthtime'
  | 'logo___childExperienceJson___logo___birthtimeMs'
  | 'logo___childExperienceJson___logo___blksize'
  | 'logo___childExperienceJson___logo___blocks'
  | 'logo___childExperienceJson___logo___publicURL'
  | 'logo___childExperienceJson___logo___childrenSkillsJson'
  | 'logo___childExperienceJson___logo___childrenShowcasesJson'
  | 'logo___childExperienceJson___logo___childrenExperienceJson'
  | 'logo___childExperienceJson___logo___childrenAboutMeJson'
  | 'logo___childExperienceJson___logo___id'
  | 'logo___childExperienceJson___logo___children'
  | 'logo___childExperienceJson___title'
  | 'logo___childExperienceJson___subtitle'
  | 'logo___childExperienceJson___startDate'
  | 'logo___childExperienceJson___endDate'
  | 'logo___childExperienceJson___description'
  | 'logo___childrenAboutMeJson'
  | 'logo___childrenAboutMeJson___id'
  | 'logo___childrenAboutMeJson___parent___id'
  | 'logo___childrenAboutMeJson___parent___children'
  | 'logo___childrenAboutMeJson___children'
  | 'logo___childrenAboutMeJson___children___id'
  | 'logo___childrenAboutMeJson___children___children'
  | 'logo___childrenAboutMeJson___internal___content'
  | 'logo___childrenAboutMeJson___internal___contentDigest'
  | 'logo___childrenAboutMeJson___internal___description'
  | 'logo___childrenAboutMeJson___internal___fieldOwners'
  | 'logo___childrenAboutMeJson___internal___ignoreType'
  | 'logo___childrenAboutMeJson___internal___mediaType'
  | 'logo___childrenAboutMeJson___internal___owner'
  | 'logo___childrenAboutMeJson___internal___type'
  | 'logo___childrenAboutMeJson___dataId'
  | 'logo___childrenAboutMeJson___title'
  | 'logo___childrenAboutMeJson___description'
  | 'logo___childrenAboutMeJson___shortDescription'
  | 'logo___childrenAboutMeJson___urls___gravatar'
  | 'logo___childrenAboutMeJson___contactDetails___label'
  | 'logo___childrenAboutMeJson___contactDetails___name'
  | 'logo___childrenAboutMeJson___contactDetails___zip'
  | 'logo___childrenAboutMeJson___contactDetails___city'
  | 'logo___childrenAboutMeJson___contactDetails___country'
  | 'logo___childrenAboutMeJson___contactDetails___email'
  | 'logo___childrenAboutMeJson___downloadResumeLabel'
  | 'logo___childrenAboutMeJson___contactLabel'
  | 'logo___childAboutMeJson___id'
  | 'logo___childAboutMeJson___parent___id'
  | 'logo___childAboutMeJson___parent___children'
  | 'logo___childAboutMeJson___children'
  | 'logo___childAboutMeJson___children___id'
  | 'logo___childAboutMeJson___children___children'
  | 'logo___childAboutMeJson___internal___content'
  | 'logo___childAboutMeJson___internal___contentDigest'
  | 'logo___childAboutMeJson___internal___description'
  | 'logo___childAboutMeJson___internal___fieldOwners'
  | 'logo___childAboutMeJson___internal___ignoreType'
  | 'logo___childAboutMeJson___internal___mediaType'
  | 'logo___childAboutMeJson___internal___owner'
  | 'logo___childAboutMeJson___internal___type'
  | 'logo___childAboutMeJson___dataId'
  | 'logo___childAboutMeJson___title'
  | 'logo___childAboutMeJson___description'
  | 'logo___childAboutMeJson___shortDescription'
  | 'logo___childAboutMeJson___urls___gravatar'
  | 'logo___childAboutMeJson___contactDetails___label'
  | 'logo___childAboutMeJson___contactDetails___name'
  | 'logo___childAboutMeJson___contactDetails___zip'
  | 'logo___childAboutMeJson___contactDetails___city'
  | 'logo___childAboutMeJson___contactDetails___country'
  | 'logo___childAboutMeJson___contactDetails___email'
  | 'logo___childAboutMeJson___downloadResumeLabel'
  | 'logo___childAboutMeJson___contactLabel'
  | 'logo___id'
  | 'logo___parent___id'
  | 'logo___parent___parent___id'
  | 'logo___parent___parent___children'
  | 'logo___parent___children'
  | 'logo___parent___children___id'
  | 'logo___parent___children___children'
  | 'logo___parent___internal___content'
  | 'logo___parent___internal___contentDigest'
  | 'logo___parent___internal___description'
  | 'logo___parent___internal___fieldOwners'
  | 'logo___parent___internal___ignoreType'
  | 'logo___parent___internal___mediaType'
  | 'logo___parent___internal___owner'
  | 'logo___parent___internal___type'
  | 'logo___children'
  | 'logo___children___id'
  | 'logo___children___parent___id'
  | 'logo___children___parent___children'
  | 'logo___children___children'
  | 'logo___children___children___id'
  | 'logo___children___children___children'
  | 'logo___children___internal___content'
  | 'logo___children___internal___contentDigest'
  | 'logo___children___internal___description'
  | 'logo___children___internal___fieldOwners'
  | 'logo___children___internal___ignoreType'
  | 'logo___children___internal___mediaType'
  | 'logo___children___internal___owner'
  | 'logo___children___internal___type'
  | 'logo___internal___content'
  | 'logo___internal___contentDigest'
  | 'logo___internal___description'
  | 'logo___internal___fieldOwners'
  | 'logo___internal___ignoreType'
  | 'logo___internal___mediaType'
  | 'logo___internal___owner'
  | 'logo___internal___type'
  | 'rating'
  | 'skillLevel'
  | 'link';

export type SkillsJsonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SkillsJsonEdge>;
  nodes: Array<SkillsJson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SkillsJsonSortInput = {
  fields?: Maybe<Array<Maybe<SkillsJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___name'
  | 'pluginOptions___short_name'
  | 'pluginOptions___start_url'
  | 'pluginOptions___background_color'
  | 'pluginOptions___theme_color'
  | 'pluginOptions___display'
  | 'pluginOptions___legacy'
  | 'pluginOptions___theme_color_in_head'
  | 'pluginOptions___cache_busting_mode'
  | 'pluginOptions___crossOrigin'
  | 'pluginOptions___include_favicon'
  | 'pluginOptions___cacheDigest'
  | 'pluginOptions___implementation___info'
  | 'pluginOptions___path'
  | 'pluginOptions___svgProps___className'
  | 'pluginOptions___headers____x'
  | 'pluginOptions___pathCheck'
  | 'pluginOptions___allExtensions'
  | 'pluginOptions___isTSX'
  | 'pluginOptions___jsxPragma'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ShowcasesJsonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShowcasesJsonEdge>;
  nodes: Array<ShowcasesJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShowcasesJsonGroupConnection>;
};


export type ShowcasesJsonConnectionDistinctArgs = {
  field: ShowcasesJsonFieldsEnum;
};


export type ShowcasesJsonConnectionMaxArgs = {
  field: ShowcasesJsonFieldsEnum;
};


export type ShowcasesJsonConnectionMinArgs = {
  field: ShowcasesJsonFieldsEnum;
};


export type ShowcasesJsonConnectionSumArgs = {
  field: ShowcasesJsonFieldsEnum;
};


export type ShowcasesJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ShowcasesJsonFieldsEnum;
};

export type ShowcasesJsonEdge = {
  next?: Maybe<ShowcasesJson>;
  node: ShowcasesJson;
  previous?: Maybe<ShowcasesJson>;
};

export type ShowcasesJsonFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'type'
  | 'subtitle'
  | 'image___sourceInstanceName'
  | 'image___absolutePath'
  | 'image___relativePath'
  | 'image___extension'
  | 'image___size'
  | 'image___prettySize'
  | 'image___modifiedTime'
  | 'image___accessTime'
  | 'image___changeTime'
  | 'image___birthTime'
  | 'image___root'
  | 'image___dir'
  | 'image___base'
  | 'image___ext'
  | 'image___name'
  | 'image___relativeDirectory'
  | 'image___dev'
  | 'image___mode'
  | 'image___nlink'
  | 'image___uid'
  | 'image___gid'
  | 'image___rdev'
  | 'image___ino'
  | 'image___atimeMs'
  | 'image___mtimeMs'
  | 'image___ctimeMs'
  | 'image___atime'
  | 'image___mtime'
  | 'image___ctime'
  | 'image___birthtime'
  | 'image___birthtimeMs'
  | 'image___blksize'
  | 'image___blocks'
  | 'image___publicURL'
  | 'image___childrenSkillsJson'
  | 'image___childrenSkillsJson___id'
  | 'image___childrenSkillsJson___parent___id'
  | 'image___childrenSkillsJson___parent___children'
  | 'image___childrenSkillsJson___children'
  | 'image___childrenSkillsJson___children___id'
  | 'image___childrenSkillsJson___children___children'
  | 'image___childrenSkillsJson___internal___content'
  | 'image___childrenSkillsJson___internal___contentDigest'
  | 'image___childrenSkillsJson___internal___description'
  | 'image___childrenSkillsJson___internal___fieldOwners'
  | 'image___childrenSkillsJson___internal___ignoreType'
  | 'image___childrenSkillsJson___internal___mediaType'
  | 'image___childrenSkillsJson___internal___owner'
  | 'image___childrenSkillsJson___internal___type'
  | 'image___childrenSkillsJson___name'
  | 'image___childrenSkillsJson___shortName'
  | 'image___childrenSkillsJson___type'
  | 'image___childrenSkillsJson___description'
  | 'image___childrenSkillsJson___startDate'
  | 'image___childrenSkillsJson___endDate'
  | 'image___childrenSkillsJson___logo___sourceInstanceName'
  | 'image___childrenSkillsJson___logo___absolutePath'
  | 'image___childrenSkillsJson___logo___relativePath'
  | 'image___childrenSkillsJson___logo___extension'
  | 'image___childrenSkillsJson___logo___size'
  | 'image___childrenSkillsJson___logo___prettySize'
  | 'image___childrenSkillsJson___logo___modifiedTime'
  | 'image___childrenSkillsJson___logo___accessTime'
  | 'image___childrenSkillsJson___logo___changeTime'
  | 'image___childrenSkillsJson___logo___birthTime'
  | 'image___childrenSkillsJson___logo___root'
  | 'image___childrenSkillsJson___logo___dir'
  | 'image___childrenSkillsJson___logo___base'
  | 'image___childrenSkillsJson___logo___ext'
  | 'image___childrenSkillsJson___logo___name'
  | 'image___childrenSkillsJson___logo___relativeDirectory'
  | 'image___childrenSkillsJson___logo___dev'
  | 'image___childrenSkillsJson___logo___mode'
  | 'image___childrenSkillsJson___logo___nlink'
  | 'image___childrenSkillsJson___logo___uid'
  | 'image___childrenSkillsJson___logo___gid'
  | 'image___childrenSkillsJson___logo___rdev'
  | 'image___childrenSkillsJson___logo___ino'
  | 'image___childrenSkillsJson___logo___atimeMs'
  | 'image___childrenSkillsJson___logo___mtimeMs'
  | 'image___childrenSkillsJson___logo___ctimeMs'
  | 'image___childrenSkillsJson___logo___atime'
  | 'image___childrenSkillsJson___logo___mtime'
  | 'image___childrenSkillsJson___logo___ctime'
  | 'image___childrenSkillsJson___logo___birthtime'
  | 'image___childrenSkillsJson___logo___birthtimeMs'
  | 'image___childrenSkillsJson___logo___blksize'
  | 'image___childrenSkillsJson___logo___blocks'
  | 'image___childrenSkillsJson___logo___publicURL'
  | 'image___childrenSkillsJson___logo___childrenSkillsJson'
  | 'image___childrenSkillsJson___logo___childrenShowcasesJson'
  | 'image___childrenSkillsJson___logo___childrenExperienceJson'
  | 'image___childrenSkillsJson___logo___childrenAboutMeJson'
  | 'image___childrenSkillsJson___logo___id'
  | 'image___childrenSkillsJson___logo___children'
  | 'image___childrenSkillsJson___rating'
  | 'image___childrenSkillsJson___skillLevel'
  | 'image___childrenSkillsJson___link'
  | 'image___childSkillsJson___id'
  | 'image___childSkillsJson___parent___id'
  | 'image___childSkillsJson___parent___children'
  | 'image___childSkillsJson___children'
  | 'image___childSkillsJson___children___id'
  | 'image___childSkillsJson___children___children'
  | 'image___childSkillsJson___internal___content'
  | 'image___childSkillsJson___internal___contentDigest'
  | 'image___childSkillsJson___internal___description'
  | 'image___childSkillsJson___internal___fieldOwners'
  | 'image___childSkillsJson___internal___ignoreType'
  | 'image___childSkillsJson___internal___mediaType'
  | 'image___childSkillsJson___internal___owner'
  | 'image___childSkillsJson___internal___type'
  | 'image___childSkillsJson___name'
  | 'image___childSkillsJson___shortName'
  | 'image___childSkillsJson___type'
  | 'image___childSkillsJson___description'
  | 'image___childSkillsJson___startDate'
  | 'image___childSkillsJson___endDate'
  | 'image___childSkillsJson___logo___sourceInstanceName'
  | 'image___childSkillsJson___logo___absolutePath'
  | 'image___childSkillsJson___logo___relativePath'
  | 'image___childSkillsJson___logo___extension'
  | 'image___childSkillsJson___logo___size'
  | 'image___childSkillsJson___logo___prettySize'
  | 'image___childSkillsJson___logo___modifiedTime'
  | 'image___childSkillsJson___logo___accessTime'
  | 'image___childSkillsJson___logo___changeTime'
  | 'image___childSkillsJson___logo___birthTime'
  | 'image___childSkillsJson___logo___root'
  | 'image___childSkillsJson___logo___dir'
  | 'image___childSkillsJson___logo___base'
  | 'image___childSkillsJson___logo___ext'
  | 'image___childSkillsJson___logo___name'
  | 'image___childSkillsJson___logo___relativeDirectory'
  | 'image___childSkillsJson___logo___dev'
  | 'image___childSkillsJson___logo___mode'
  | 'image___childSkillsJson___logo___nlink'
  | 'image___childSkillsJson___logo___uid'
  | 'image___childSkillsJson___logo___gid'
  | 'image___childSkillsJson___logo___rdev'
  | 'image___childSkillsJson___logo___ino'
  | 'image___childSkillsJson___logo___atimeMs'
  | 'image___childSkillsJson___logo___mtimeMs'
  | 'image___childSkillsJson___logo___ctimeMs'
  | 'image___childSkillsJson___logo___atime'
  | 'image___childSkillsJson___logo___mtime'
  | 'image___childSkillsJson___logo___ctime'
  | 'image___childSkillsJson___logo___birthtime'
  | 'image___childSkillsJson___logo___birthtimeMs'
  | 'image___childSkillsJson___logo___blksize'
  | 'image___childSkillsJson___logo___blocks'
  | 'image___childSkillsJson___logo___publicURL'
  | 'image___childSkillsJson___logo___childrenSkillsJson'
  | 'image___childSkillsJson___logo___childrenShowcasesJson'
  | 'image___childSkillsJson___logo___childrenExperienceJson'
  | 'image___childSkillsJson___logo___childrenAboutMeJson'
  | 'image___childSkillsJson___logo___id'
  | 'image___childSkillsJson___logo___children'
  | 'image___childSkillsJson___rating'
  | 'image___childSkillsJson___skillLevel'
  | 'image___childSkillsJson___link'
  | 'image___childrenShowcasesJson'
  | 'image___childrenShowcasesJson___id'
  | 'image___childrenShowcasesJson___parent___id'
  | 'image___childrenShowcasesJson___parent___children'
  | 'image___childrenShowcasesJson___children'
  | 'image___childrenShowcasesJson___children___id'
  | 'image___childrenShowcasesJson___children___children'
  | 'image___childrenShowcasesJson___internal___content'
  | 'image___childrenShowcasesJson___internal___contentDigest'
  | 'image___childrenShowcasesJson___internal___description'
  | 'image___childrenShowcasesJson___internal___fieldOwners'
  | 'image___childrenShowcasesJson___internal___ignoreType'
  | 'image___childrenShowcasesJson___internal___mediaType'
  | 'image___childrenShowcasesJson___internal___owner'
  | 'image___childrenShowcasesJson___internal___type'
  | 'image___childrenShowcasesJson___title'
  | 'image___childrenShowcasesJson___type'
  | 'image___childrenShowcasesJson___subtitle'
  | 'image___childrenShowcasesJson___image___sourceInstanceName'
  | 'image___childrenShowcasesJson___image___absolutePath'
  | 'image___childrenShowcasesJson___image___relativePath'
  | 'image___childrenShowcasesJson___image___extension'
  | 'image___childrenShowcasesJson___image___size'
  | 'image___childrenShowcasesJson___image___prettySize'
  | 'image___childrenShowcasesJson___image___modifiedTime'
  | 'image___childrenShowcasesJson___image___accessTime'
  | 'image___childrenShowcasesJson___image___changeTime'
  | 'image___childrenShowcasesJson___image___birthTime'
  | 'image___childrenShowcasesJson___image___root'
  | 'image___childrenShowcasesJson___image___dir'
  | 'image___childrenShowcasesJson___image___base'
  | 'image___childrenShowcasesJson___image___ext'
  | 'image___childrenShowcasesJson___image___name'
  | 'image___childrenShowcasesJson___image___relativeDirectory'
  | 'image___childrenShowcasesJson___image___dev'
  | 'image___childrenShowcasesJson___image___mode'
  | 'image___childrenShowcasesJson___image___nlink'
  | 'image___childrenShowcasesJson___image___uid'
  | 'image___childrenShowcasesJson___image___gid'
  | 'image___childrenShowcasesJson___image___rdev'
  | 'image___childrenShowcasesJson___image___ino'
  | 'image___childrenShowcasesJson___image___atimeMs'
  | 'image___childrenShowcasesJson___image___mtimeMs'
  | 'image___childrenShowcasesJson___image___ctimeMs'
  | 'image___childrenShowcasesJson___image___atime'
  | 'image___childrenShowcasesJson___image___mtime'
  | 'image___childrenShowcasesJson___image___ctime'
  | 'image___childrenShowcasesJson___image___birthtime'
  | 'image___childrenShowcasesJson___image___birthtimeMs'
  | 'image___childrenShowcasesJson___image___blksize'
  | 'image___childrenShowcasesJson___image___blocks'
  | 'image___childrenShowcasesJson___image___publicURL'
  | 'image___childrenShowcasesJson___image___childrenSkillsJson'
  | 'image___childrenShowcasesJson___image___childrenShowcasesJson'
  | 'image___childrenShowcasesJson___image___childrenExperienceJson'
  | 'image___childrenShowcasesJson___image___childrenAboutMeJson'
  | 'image___childrenShowcasesJson___image___id'
  | 'image___childrenShowcasesJson___image___children'
  | 'image___childrenShowcasesJson___authors'
  | 'image___childrenShowcasesJson___tags'
  | 'image___childrenShowcasesJson___description'
  | 'image___childrenShowcasesJson___link'
  | 'image___childrenShowcasesJson___sourceCodeLink'
  | 'image___childrenShowcasesJson___internalLink___sourceInstanceName'
  | 'image___childrenShowcasesJson___internalLink___absolutePath'
  | 'image___childrenShowcasesJson___internalLink___relativePath'
  | 'image___childrenShowcasesJson___internalLink___extension'
  | 'image___childrenShowcasesJson___internalLink___size'
  | 'image___childrenShowcasesJson___internalLink___prettySize'
  | 'image___childrenShowcasesJson___internalLink___modifiedTime'
  | 'image___childrenShowcasesJson___internalLink___accessTime'
  | 'image___childrenShowcasesJson___internalLink___changeTime'
  | 'image___childrenShowcasesJson___internalLink___birthTime'
  | 'image___childrenShowcasesJson___internalLink___root'
  | 'image___childrenShowcasesJson___internalLink___dir'
  | 'image___childrenShowcasesJson___internalLink___base'
  | 'image___childrenShowcasesJson___internalLink___ext'
  | 'image___childrenShowcasesJson___internalLink___name'
  | 'image___childrenShowcasesJson___internalLink___relativeDirectory'
  | 'image___childrenShowcasesJson___internalLink___dev'
  | 'image___childrenShowcasesJson___internalLink___mode'
  | 'image___childrenShowcasesJson___internalLink___nlink'
  | 'image___childrenShowcasesJson___internalLink___uid'
  | 'image___childrenShowcasesJson___internalLink___gid'
  | 'image___childrenShowcasesJson___internalLink___rdev'
  | 'image___childrenShowcasesJson___internalLink___ino'
  | 'image___childrenShowcasesJson___internalLink___atimeMs'
  | 'image___childrenShowcasesJson___internalLink___mtimeMs'
  | 'image___childrenShowcasesJson___internalLink___ctimeMs'
  | 'image___childrenShowcasesJson___internalLink___atime'
  | 'image___childrenShowcasesJson___internalLink___mtime'
  | 'image___childrenShowcasesJson___internalLink___ctime'
  | 'image___childrenShowcasesJson___internalLink___birthtime'
  | 'image___childrenShowcasesJson___internalLink___birthtimeMs'
  | 'image___childrenShowcasesJson___internalLink___blksize'
  | 'image___childrenShowcasesJson___internalLink___blocks'
  | 'image___childrenShowcasesJson___internalLink___publicURL'
  | 'image___childrenShowcasesJson___internalLink___childrenSkillsJson'
  | 'image___childrenShowcasesJson___internalLink___childrenShowcasesJson'
  | 'image___childrenShowcasesJson___internalLink___childrenExperienceJson'
  | 'image___childrenShowcasesJson___internalLink___childrenAboutMeJson'
  | 'image___childrenShowcasesJson___internalLink___id'
  | 'image___childrenShowcasesJson___internalLink___children'
  | 'image___childShowcasesJson___id'
  | 'image___childShowcasesJson___parent___id'
  | 'image___childShowcasesJson___parent___children'
  | 'image___childShowcasesJson___children'
  | 'image___childShowcasesJson___children___id'
  | 'image___childShowcasesJson___children___children'
  | 'image___childShowcasesJson___internal___content'
  | 'image___childShowcasesJson___internal___contentDigest'
  | 'image___childShowcasesJson___internal___description'
  | 'image___childShowcasesJson___internal___fieldOwners'
  | 'image___childShowcasesJson___internal___ignoreType'
  | 'image___childShowcasesJson___internal___mediaType'
  | 'image___childShowcasesJson___internal___owner'
  | 'image___childShowcasesJson___internal___type'
  | 'image___childShowcasesJson___title'
  | 'image___childShowcasesJson___type'
  | 'image___childShowcasesJson___subtitle'
  | 'image___childShowcasesJson___image___sourceInstanceName'
  | 'image___childShowcasesJson___image___absolutePath'
  | 'image___childShowcasesJson___image___relativePath'
  | 'image___childShowcasesJson___image___extension'
  | 'image___childShowcasesJson___image___size'
  | 'image___childShowcasesJson___image___prettySize'
  | 'image___childShowcasesJson___image___modifiedTime'
  | 'image___childShowcasesJson___image___accessTime'
  | 'image___childShowcasesJson___image___changeTime'
  | 'image___childShowcasesJson___image___birthTime'
  | 'image___childShowcasesJson___image___root'
  | 'image___childShowcasesJson___image___dir'
  | 'image___childShowcasesJson___image___base'
  | 'image___childShowcasesJson___image___ext'
  | 'image___childShowcasesJson___image___name'
  | 'image___childShowcasesJson___image___relativeDirectory'
  | 'image___childShowcasesJson___image___dev'
  | 'image___childShowcasesJson___image___mode'
  | 'image___childShowcasesJson___image___nlink'
  | 'image___childShowcasesJson___image___uid'
  | 'image___childShowcasesJson___image___gid'
  | 'image___childShowcasesJson___image___rdev'
  | 'image___childShowcasesJson___image___ino'
  | 'image___childShowcasesJson___image___atimeMs'
  | 'image___childShowcasesJson___image___mtimeMs'
  | 'image___childShowcasesJson___image___ctimeMs'
  | 'image___childShowcasesJson___image___atime'
  | 'image___childShowcasesJson___image___mtime'
  | 'image___childShowcasesJson___image___ctime'
  | 'image___childShowcasesJson___image___birthtime'
  | 'image___childShowcasesJson___image___birthtimeMs'
  | 'image___childShowcasesJson___image___blksize'
  | 'image___childShowcasesJson___image___blocks'
  | 'image___childShowcasesJson___image___publicURL'
  | 'image___childShowcasesJson___image___childrenSkillsJson'
  | 'image___childShowcasesJson___image___childrenShowcasesJson'
  | 'image___childShowcasesJson___image___childrenExperienceJson'
  | 'image___childShowcasesJson___image___childrenAboutMeJson'
  | 'image___childShowcasesJson___image___id'
  | 'image___childShowcasesJson___image___children'
  | 'image___childShowcasesJson___authors'
  | 'image___childShowcasesJson___tags'
  | 'image___childShowcasesJson___description'
  | 'image___childShowcasesJson___link'
  | 'image___childShowcasesJson___sourceCodeLink'
  | 'image___childShowcasesJson___internalLink___sourceInstanceName'
  | 'image___childShowcasesJson___internalLink___absolutePath'
  | 'image___childShowcasesJson___internalLink___relativePath'
  | 'image___childShowcasesJson___internalLink___extension'
  | 'image___childShowcasesJson___internalLink___size'
  | 'image___childShowcasesJson___internalLink___prettySize'
  | 'image___childShowcasesJson___internalLink___modifiedTime'
  | 'image___childShowcasesJson___internalLink___accessTime'
  | 'image___childShowcasesJson___internalLink___changeTime'
  | 'image___childShowcasesJson___internalLink___birthTime'
  | 'image___childShowcasesJson___internalLink___root'
  | 'image___childShowcasesJson___internalLink___dir'
  | 'image___childShowcasesJson___internalLink___base'
  | 'image___childShowcasesJson___internalLink___ext'
  | 'image___childShowcasesJson___internalLink___name'
  | 'image___childShowcasesJson___internalLink___relativeDirectory'
  | 'image___childShowcasesJson___internalLink___dev'
  | 'image___childShowcasesJson___internalLink___mode'
  | 'image___childShowcasesJson___internalLink___nlink'
  | 'image___childShowcasesJson___internalLink___uid'
  | 'image___childShowcasesJson___internalLink___gid'
  | 'image___childShowcasesJson___internalLink___rdev'
  | 'image___childShowcasesJson___internalLink___ino'
  | 'image___childShowcasesJson___internalLink___atimeMs'
  | 'image___childShowcasesJson___internalLink___mtimeMs'
  | 'image___childShowcasesJson___internalLink___ctimeMs'
  | 'image___childShowcasesJson___internalLink___atime'
  | 'image___childShowcasesJson___internalLink___mtime'
  | 'image___childShowcasesJson___internalLink___ctime'
  | 'image___childShowcasesJson___internalLink___birthtime'
  | 'image___childShowcasesJson___internalLink___birthtimeMs'
  | 'image___childShowcasesJson___internalLink___blksize'
  | 'image___childShowcasesJson___internalLink___blocks'
  | 'image___childShowcasesJson___internalLink___publicURL'
  | 'image___childShowcasesJson___internalLink___childrenSkillsJson'
  | 'image___childShowcasesJson___internalLink___childrenShowcasesJson'
  | 'image___childShowcasesJson___internalLink___childrenExperienceJson'
  | 'image___childShowcasesJson___internalLink___childrenAboutMeJson'
  | 'image___childShowcasesJson___internalLink___id'
  | 'image___childShowcasesJson___internalLink___children'
  | 'image___childrenExperienceJson'
  | 'image___childrenExperienceJson___id'
  | 'image___childrenExperienceJson___parent___id'
  | 'image___childrenExperienceJson___parent___children'
  | 'image___childrenExperienceJson___children'
  | 'image___childrenExperienceJson___children___id'
  | 'image___childrenExperienceJson___children___children'
  | 'image___childrenExperienceJson___internal___content'
  | 'image___childrenExperienceJson___internal___contentDigest'
  | 'image___childrenExperienceJson___internal___description'
  | 'image___childrenExperienceJson___internal___fieldOwners'
  | 'image___childrenExperienceJson___internal___ignoreType'
  | 'image___childrenExperienceJson___internal___mediaType'
  | 'image___childrenExperienceJson___internal___owner'
  | 'image___childrenExperienceJson___internal___type'
  | 'image___childrenExperienceJson___dataId'
  | 'image___childrenExperienceJson___type'
  | 'image___childrenExperienceJson___logo___sourceInstanceName'
  | 'image___childrenExperienceJson___logo___absolutePath'
  | 'image___childrenExperienceJson___logo___relativePath'
  | 'image___childrenExperienceJson___logo___extension'
  | 'image___childrenExperienceJson___logo___size'
  | 'image___childrenExperienceJson___logo___prettySize'
  | 'image___childrenExperienceJson___logo___modifiedTime'
  | 'image___childrenExperienceJson___logo___accessTime'
  | 'image___childrenExperienceJson___logo___changeTime'
  | 'image___childrenExperienceJson___logo___birthTime'
  | 'image___childrenExperienceJson___logo___root'
  | 'image___childrenExperienceJson___logo___dir'
  | 'image___childrenExperienceJson___logo___base'
  | 'image___childrenExperienceJson___logo___ext'
  | 'image___childrenExperienceJson___logo___name'
  | 'image___childrenExperienceJson___logo___relativeDirectory'
  | 'image___childrenExperienceJson___logo___dev'
  | 'image___childrenExperienceJson___logo___mode'
  | 'image___childrenExperienceJson___logo___nlink'
  | 'image___childrenExperienceJson___logo___uid'
  | 'image___childrenExperienceJson___logo___gid'
  | 'image___childrenExperienceJson___logo___rdev'
  | 'image___childrenExperienceJson___logo___ino'
  | 'image___childrenExperienceJson___logo___atimeMs'
  | 'image___childrenExperienceJson___logo___mtimeMs'
  | 'image___childrenExperienceJson___logo___ctimeMs'
  | 'image___childrenExperienceJson___logo___atime'
  | 'image___childrenExperienceJson___logo___mtime'
  | 'image___childrenExperienceJson___logo___ctime'
  | 'image___childrenExperienceJson___logo___birthtime'
  | 'image___childrenExperienceJson___logo___birthtimeMs'
  | 'image___childrenExperienceJson___logo___blksize'
  | 'image___childrenExperienceJson___logo___blocks'
  | 'image___childrenExperienceJson___logo___publicURL'
  | 'image___childrenExperienceJson___logo___childrenSkillsJson'
  | 'image___childrenExperienceJson___logo___childrenShowcasesJson'
  | 'image___childrenExperienceJson___logo___childrenExperienceJson'
  | 'image___childrenExperienceJson___logo___childrenAboutMeJson'
  | 'image___childrenExperienceJson___logo___id'
  | 'image___childrenExperienceJson___logo___children'
  | 'image___childrenExperienceJson___title'
  | 'image___childrenExperienceJson___subtitle'
  | 'image___childrenExperienceJson___startDate'
  | 'image___childrenExperienceJson___endDate'
  | 'image___childrenExperienceJson___description'
  | 'image___childExperienceJson___id'
  | 'image___childExperienceJson___parent___id'
  | 'image___childExperienceJson___parent___children'
  | 'image___childExperienceJson___children'
  | 'image___childExperienceJson___children___id'
  | 'image___childExperienceJson___children___children'
  | 'image___childExperienceJson___internal___content'
  | 'image___childExperienceJson___internal___contentDigest'
  | 'image___childExperienceJson___internal___description'
  | 'image___childExperienceJson___internal___fieldOwners'
  | 'image___childExperienceJson___internal___ignoreType'
  | 'image___childExperienceJson___internal___mediaType'
  | 'image___childExperienceJson___internal___owner'
  | 'image___childExperienceJson___internal___type'
  | 'image___childExperienceJson___dataId'
  | 'image___childExperienceJson___type'
  | 'image___childExperienceJson___logo___sourceInstanceName'
  | 'image___childExperienceJson___logo___absolutePath'
  | 'image___childExperienceJson___logo___relativePath'
  | 'image___childExperienceJson___logo___extension'
  | 'image___childExperienceJson___logo___size'
  | 'image___childExperienceJson___logo___prettySize'
  | 'image___childExperienceJson___logo___modifiedTime'
  | 'image___childExperienceJson___logo___accessTime'
  | 'image___childExperienceJson___logo___changeTime'
  | 'image___childExperienceJson___logo___birthTime'
  | 'image___childExperienceJson___logo___root'
  | 'image___childExperienceJson___logo___dir'
  | 'image___childExperienceJson___logo___base'
  | 'image___childExperienceJson___logo___ext'
  | 'image___childExperienceJson___logo___name'
  | 'image___childExperienceJson___logo___relativeDirectory'
  | 'image___childExperienceJson___logo___dev'
  | 'image___childExperienceJson___logo___mode'
  | 'image___childExperienceJson___logo___nlink'
  | 'image___childExperienceJson___logo___uid'
  | 'image___childExperienceJson___logo___gid'
  | 'image___childExperienceJson___logo___rdev'
  | 'image___childExperienceJson___logo___ino'
  | 'image___childExperienceJson___logo___atimeMs'
  | 'image___childExperienceJson___logo___mtimeMs'
  | 'image___childExperienceJson___logo___ctimeMs'
  | 'image___childExperienceJson___logo___atime'
  | 'image___childExperienceJson___logo___mtime'
  | 'image___childExperienceJson___logo___ctime'
  | 'image___childExperienceJson___logo___birthtime'
  | 'image___childExperienceJson___logo___birthtimeMs'
  | 'image___childExperienceJson___logo___blksize'
  | 'image___childExperienceJson___logo___blocks'
  | 'image___childExperienceJson___logo___publicURL'
  | 'image___childExperienceJson___logo___childrenSkillsJson'
  | 'image___childExperienceJson___logo___childrenShowcasesJson'
  | 'image___childExperienceJson___logo___childrenExperienceJson'
  | 'image___childExperienceJson___logo___childrenAboutMeJson'
  | 'image___childExperienceJson___logo___id'
  | 'image___childExperienceJson___logo___children'
  | 'image___childExperienceJson___title'
  | 'image___childExperienceJson___subtitle'
  | 'image___childExperienceJson___startDate'
  | 'image___childExperienceJson___endDate'
  | 'image___childExperienceJson___description'
  | 'image___childrenAboutMeJson'
  | 'image___childrenAboutMeJson___id'
  | 'image___childrenAboutMeJson___parent___id'
  | 'image___childrenAboutMeJson___parent___children'
  | 'image___childrenAboutMeJson___children'
  | 'image___childrenAboutMeJson___children___id'
  | 'image___childrenAboutMeJson___children___children'
  | 'image___childrenAboutMeJson___internal___content'
  | 'image___childrenAboutMeJson___internal___contentDigest'
  | 'image___childrenAboutMeJson___internal___description'
  | 'image___childrenAboutMeJson___internal___fieldOwners'
  | 'image___childrenAboutMeJson___internal___ignoreType'
  | 'image___childrenAboutMeJson___internal___mediaType'
  | 'image___childrenAboutMeJson___internal___owner'
  | 'image___childrenAboutMeJson___internal___type'
  | 'image___childrenAboutMeJson___dataId'
  | 'image___childrenAboutMeJson___title'
  | 'image___childrenAboutMeJson___description'
  | 'image___childrenAboutMeJson___shortDescription'
  | 'image___childrenAboutMeJson___urls___gravatar'
  | 'image___childrenAboutMeJson___contactDetails___label'
  | 'image___childrenAboutMeJson___contactDetails___name'
  | 'image___childrenAboutMeJson___contactDetails___zip'
  | 'image___childrenAboutMeJson___contactDetails___city'
  | 'image___childrenAboutMeJson___contactDetails___country'
  | 'image___childrenAboutMeJson___contactDetails___email'
  | 'image___childrenAboutMeJson___downloadResumeLabel'
  | 'image___childrenAboutMeJson___contactLabel'
  | 'image___childAboutMeJson___id'
  | 'image___childAboutMeJson___parent___id'
  | 'image___childAboutMeJson___parent___children'
  | 'image___childAboutMeJson___children'
  | 'image___childAboutMeJson___children___id'
  | 'image___childAboutMeJson___children___children'
  | 'image___childAboutMeJson___internal___content'
  | 'image___childAboutMeJson___internal___contentDigest'
  | 'image___childAboutMeJson___internal___description'
  | 'image___childAboutMeJson___internal___fieldOwners'
  | 'image___childAboutMeJson___internal___ignoreType'
  | 'image___childAboutMeJson___internal___mediaType'
  | 'image___childAboutMeJson___internal___owner'
  | 'image___childAboutMeJson___internal___type'
  | 'image___childAboutMeJson___dataId'
  | 'image___childAboutMeJson___title'
  | 'image___childAboutMeJson___description'
  | 'image___childAboutMeJson___shortDescription'
  | 'image___childAboutMeJson___urls___gravatar'
  | 'image___childAboutMeJson___contactDetails___label'
  | 'image___childAboutMeJson___contactDetails___name'
  | 'image___childAboutMeJson___contactDetails___zip'
  | 'image___childAboutMeJson___contactDetails___city'
  | 'image___childAboutMeJson___contactDetails___country'
  | 'image___childAboutMeJson___contactDetails___email'
  | 'image___childAboutMeJson___downloadResumeLabel'
  | 'image___childAboutMeJson___contactLabel'
  | 'image___id'
  | 'image___parent___id'
  | 'image___parent___parent___id'
  | 'image___parent___parent___children'
  | 'image___parent___children'
  | 'image___parent___children___id'
  | 'image___parent___children___children'
  | 'image___parent___internal___content'
  | 'image___parent___internal___contentDigest'
  | 'image___parent___internal___description'
  | 'image___parent___internal___fieldOwners'
  | 'image___parent___internal___ignoreType'
  | 'image___parent___internal___mediaType'
  | 'image___parent___internal___owner'
  | 'image___parent___internal___type'
  | 'image___children'
  | 'image___children___id'
  | 'image___children___parent___id'
  | 'image___children___parent___children'
  | 'image___children___children'
  | 'image___children___children___id'
  | 'image___children___children___children'
  | 'image___children___internal___content'
  | 'image___children___internal___contentDigest'
  | 'image___children___internal___description'
  | 'image___children___internal___fieldOwners'
  | 'image___children___internal___ignoreType'
  | 'image___children___internal___mediaType'
  | 'image___children___internal___owner'
  | 'image___children___internal___type'
  | 'image___internal___content'
  | 'image___internal___contentDigest'
  | 'image___internal___description'
  | 'image___internal___fieldOwners'
  | 'image___internal___ignoreType'
  | 'image___internal___mediaType'
  | 'image___internal___owner'
  | 'image___internal___type'
  | 'authors'
  | 'tags'
  | 'description'
  | 'link'
  | 'sourceCodeLink'
  | 'internalLink___sourceInstanceName'
  | 'internalLink___absolutePath'
  | 'internalLink___relativePath'
  | 'internalLink___extension'
  | 'internalLink___size'
  | 'internalLink___prettySize'
  | 'internalLink___modifiedTime'
  | 'internalLink___accessTime'
  | 'internalLink___changeTime'
  | 'internalLink___birthTime'
  | 'internalLink___root'
  | 'internalLink___dir'
  | 'internalLink___base'
  | 'internalLink___ext'
  | 'internalLink___name'
  | 'internalLink___relativeDirectory'
  | 'internalLink___dev'
  | 'internalLink___mode'
  | 'internalLink___nlink'
  | 'internalLink___uid'
  | 'internalLink___gid'
  | 'internalLink___rdev'
  | 'internalLink___ino'
  | 'internalLink___atimeMs'
  | 'internalLink___mtimeMs'
  | 'internalLink___ctimeMs'
  | 'internalLink___atime'
  | 'internalLink___mtime'
  | 'internalLink___ctime'
  | 'internalLink___birthtime'
  | 'internalLink___birthtimeMs'
  | 'internalLink___blksize'
  | 'internalLink___blocks'
  | 'internalLink___publicURL'
  | 'internalLink___childrenSkillsJson'
  | 'internalLink___childrenSkillsJson___id'
  | 'internalLink___childrenSkillsJson___parent___id'
  | 'internalLink___childrenSkillsJson___parent___children'
  | 'internalLink___childrenSkillsJson___children'
  | 'internalLink___childrenSkillsJson___children___id'
  | 'internalLink___childrenSkillsJson___children___children'
  | 'internalLink___childrenSkillsJson___internal___content'
  | 'internalLink___childrenSkillsJson___internal___contentDigest'
  | 'internalLink___childrenSkillsJson___internal___description'
  | 'internalLink___childrenSkillsJson___internal___fieldOwners'
  | 'internalLink___childrenSkillsJson___internal___ignoreType'
  | 'internalLink___childrenSkillsJson___internal___mediaType'
  | 'internalLink___childrenSkillsJson___internal___owner'
  | 'internalLink___childrenSkillsJson___internal___type'
  | 'internalLink___childrenSkillsJson___name'
  | 'internalLink___childrenSkillsJson___shortName'
  | 'internalLink___childrenSkillsJson___type'
  | 'internalLink___childrenSkillsJson___description'
  | 'internalLink___childrenSkillsJson___startDate'
  | 'internalLink___childrenSkillsJson___endDate'
  | 'internalLink___childrenSkillsJson___logo___sourceInstanceName'
  | 'internalLink___childrenSkillsJson___logo___absolutePath'
  | 'internalLink___childrenSkillsJson___logo___relativePath'
  | 'internalLink___childrenSkillsJson___logo___extension'
  | 'internalLink___childrenSkillsJson___logo___size'
  | 'internalLink___childrenSkillsJson___logo___prettySize'
  | 'internalLink___childrenSkillsJson___logo___modifiedTime'
  | 'internalLink___childrenSkillsJson___logo___accessTime'
  | 'internalLink___childrenSkillsJson___logo___changeTime'
  | 'internalLink___childrenSkillsJson___logo___birthTime'
  | 'internalLink___childrenSkillsJson___logo___root'
  | 'internalLink___childrenSkillsJson___logo___dir'
  | 'internalLink___childrenSkillsJson___logo___base'
  | 'internalLink___childrenSkillsJson___logo___ext'
  | 'internalLink___childrenSkillsJson___logo___name'
  | 'internalLink___childrenSkillsJson___logo___relativeDirectory'
  | 'internalLink___childrenSkillsJson___logo___dev'
  | 'internalLink___childrenSkillsJson___logo___mode'
  | 'internalLink___childrenSkillsJson___logo___nlink'
  | 'internalLink___childrenSkillsJson___logo___uid'
  | 'internalLink___childrenSkillsJson___logo___gid'
  | 'internalLink___childrenSkillsJson___logo___rdev'
  | 'internalLink___childrenSkillsJson___logo___ino'
  | 'internalLink___childrenSkillsJson___logo___atimeMs'
  | 'internalLink___childrenSkillsJson___logo___mtimeMs'
  | 'internalLink___childrenSkillsJson___logo___ctimeMs'
  | 'internalLink___childrenSkillsJson___logo___atime'
  | 'internalLink___childrenSkillsJson___logo___mtime'
  | 'internalLink___childrenSkillsJson___logo___ctime'
  | 'internalLink___childrenSkillsJson___logo___birthtime'
  | 'internalLink___childrenSkillsJson___logo___birthtimeMs'
  | 'internalLink___childrenSkillsJson___logo___blksize'
  | 'internalLink___childrenSkillsJson___logo___blocks'
  | 'internalLink___childrenSkillsJson___logo___publicURL'
  | 'internalLink___childrenSkillsJson___logo___childrenSkillsJson'
  | 'internalLink___childrenSkillsJson___logo___childrenShowcasesJson'
  | 'internalLink___childrenSkillsJson___logo___childrenExperienceJson'
  | 'internalLink___childrenSkillsJson___logo___childrenAboutMeJson'
  | 'internalLink___childrenSkillsJson___logo___id'
  | 'internalLink___childrenSkillsJson___logo___children'
  | 'internalLink___childrenSkillsJson___rating'
  | 'internalLink___childrenSkillsJson___skillLevel'
  | 'internalLink___childrenSkillsJson___link'
  | 'internalLink___childSkillsJson___id'
  | 'internalLink___childSkillsJson___parent___id'
  | 'internalLink___childSkillsJson___parent___children'
  | 'internalLink___childSkillsJson___children'
  | 'internalLink___childSkillsJson___children___id'
  | 'internalLink___childSkillsJson___children___children'
  | 'internalLink___childSkillsJson___internal___content'
  | 'internalLink___childSkillsJson___internal___contentDigest'
  | 'internalLink___childSkillsJson___internal___description'
  | 'internalLink___childSkillsJson___internal___fieldOwners'
  | 'internalLink___childSkillsJson___internal___ignoreType'
  | 'internalLink___childSkillsJson___internal___mediaType'
  | 'internalLink___childSkillsJson___internal___owner'
  | 'internalLink___childSkillsJson___internal___type'
  | 'internalLink___childSkillsJson___name'
  | 'internalLink___childSkillsJson___shortName'
  | 'internalLink___childSkillsJson___type'
  | 'internalLink___childSkillsJson___description'
  | 'internalLink___childSkillsJson___startDate'
  | 'internalLink___childSkillsJson___endDate'
  | 'internalLink___childSkillsJson___logo___sourceInstanceName'
  | 'internalLink___childSkillsJson___logo___absolutePath'
  | 'internalLink___childSkillsJson___logo___relativePath'
  | 'internalLink___childSkillsJson___logo___extension'
  | 'internalLink___childSkillsJson___logo___size'
  | 'internalLink___childSkillsJson___logo___prettySize'
  | 'internalLink___childSkillsJson___logo___modifiedTime'
  | 'internalLink___childSkillsJson___logo___accessTime'
  | 'internalLink___childSkillsJson___logo___changeTime'
  | 'internalLink___childSkillsJson___logo___birthTime'
  | 'internalLink___childSkillsJson___logo___root'
  | 'internalLink___childSkillsJson___logo___dir'
  | 'internalLink___childSkillsJson___logo___base'
  | 'internalLink___childSkillsJson___logo___ext'
  | 'internalLink___childSkillsJson___logo___name'
  | 'internalLink___childSkillsJson___logo___relativeDirectory'
  | 'internalLink___childSkillsJson___logo___dev'
  | 'internalLink___childSkillsJson___logo___mode'
  | 'internalLink___childSkillsJson___logo___nlink'
  | 'internalLink___childSkillsJson___logo___uid'
  | 'internalLink___childSkillsJson___logo___gid'
  | 'internalLink___childSkillsJson___logo___rdev'
  | 'internalLink___childSkillsJson___logo___ino'
  | 'internalLink___childSkillsJson___logo___atimeMs'
  | 'internalLink___childSkillsJson___logo___mtimeMs'
  | 'internalLink___childSkillsJson___logo___ctimeMs'
  | 'internalLink___childSkillsJson___logo___atime'
  | 'internalLink___childSkillsJson___logo___mtime'
  | 'internalLink___childSkillsJson___logo___ctime'
  | 'internalLink___childSkillsJson___logo___birthtime'
  | 'internalLink___childSkillsJson___logo___birthtimeMs'
  | 'internalLink___childSkillsJson___logo___blksize'
  | 'internalLink___childSkillsJson___logo___blocks'
  | 'internalLink___childSkillsJson___logo___publicURL'
  | 'internalLink___childSkillsJson___logo___childrenSkillsJson'
  | 'internalLink___childSkillsJson___logo___childrenShowcasesJson'
  | 'internalLink___childSkillsJson___logo___childrenExperienceJson'
  | 'internalLink___childSkillsJson___logo___childrenAboutMeJson'
  | 'internalLink___childSkillsJson___logo___id'
  | 'internalLink___childSkillsJson___logo___children'
  | 'internalLink___childSkillsJson___rating'
  | 'internalLink___childSkillsJson___skillLevel'
  | 'internalLink___childSkillsJson___link'
  | 'internalLink___childrenShowcasesJson'
  | 'internalLink___childrenShowcasesJson___id'
  | 'internalLink___childrenShowcasesJson___parent___id'
  | 'internalLink___childrenShowcasesJson___parent___children'
  | 'internalLink___childrenShowcasesJson___children'
  | 'internalLink___childrenShowcasesJson___children___id'
  | 'internalLink___childrenShowcasesJson___children___children'
  | 'internalLink___childrenShowcasesJson___internal___content'
  | 'internalLink___childrenShowcasesJson___internal___contentDigest'
  | 'internalLink___childrenShowcasesJson___internal___description'
  | 'internalLink___childrenShowcasesJson___internal___fieldOwners'
  | 'internalLink___childrenShowcasesJson___internal___ignoreType'
  | 'internalLink___childrenShowcasesJson___internal___mediaType'
  | 'internalLink___childrenShowcasesJson___internal___owner'
  | 'internalLink___childrenShowcasesJson___internal___type'
  | 'internalLink___childrenShowcasesJson___title'
  | 'internalLink___childrenShowcasesJson___type'
  | 'internalLink___childrenShowcasesJson___subtitle'
  | 'internalLink___childrenShowcasesJson___image___sourceInstanceName'
  | 'internalLink___childrenShowcasesJson___image___absolutePath'
  | 'internalLink___childrenShowcasesJson___image___relativePath'
  | 'internalLink___childrenShowcasesJson___image___extension'
  | 'internalLink___childrenShowcasesJson___image___size'
  | 'internalLink___childrenShowcasesJson___image___prettySize'
  | 'internalLink___childrenShowcasesJson___image___modifiedTime'
  | 'internalLink___childrenShowcasesJson___image___accessTime'
  | 'internalLink___childrenShowcasesJson___image___changeTime'
  | 'internalLink___childrenShowcasesJson___image___birthTime'
  | 'internalLink___childrenShowcasesJson___image___root'
  | 'internalLink___childrenShowcasesJson___image___dir'
  | 'internalLink___childrenShowcasesJson___image___base'
  | 'internalLink___childrenShowcasesJson___image___ext'
  | 'internalLink___childrenShowcasesJson___image___name'
  | 'internalLink___childrenShowcasesJson___image___relativeDirectory'
  | 'internalLink___childrenShowcasesJson___image___dev'
  | 'internalLink___childrenShowcasesJson___image___mode'
  | 'internalLink___childrenShowcasesJson___image___nlink'
  | 'internalLink___childrenShowcasesJson___image___uid'
  | 'internalLink___childrenShowcasesJson___image___gid'
  | 'internalLink___childrenShowcasesJson___image___rdev'
  | 'internalLink___childrenShowcasesJson___image___ino'
  | 'internalLink___childrenShowcasesJson___image___atimeMs'
  | 'internalLink___childrenShowcasesJson___image___mtimeMs'
  | 'internalLink___childrenShowcasesJson___image___ctimeMs'
  | 'internalLink___childrenShowcasesJson___image___atime'
  | 'internalLink___childrenShowcasesJson___image___mtime'
  | 'internalLink___childrenShowcasesJson___image___ctime'
  | 'internalLink___childrenShowcasesJson___image___birthtime'
  | 'internalLink___childrenShowcasesJson___image___birthtimeMs'
  | 'internalLink___childrenShowcasesJson___image___blksize'
  | 'internalLink___childrenShowcasesJson___image___blocks'
  | 'internalLink___childrenShowcasesJson___image___publicURL'
  | 'internalLink___childrenShowcasesJson___image___childrenSkillsJson'
  | 'internalLink___childrenShowcasesJson___image___childrenShowcasesJson'
  | 'internalLink___childrenShowcasesJson___image___childrenExperienceJson'
  | 'internalLink___childrenShowcasesJson___image___childrenAboutMeJson'
  | 'internalLink___childrenShowcasesJson___image___id'
  | 'internalLink___childrenShowcasesJson___image___children'
  | 'internalLink___childrenShowcasesJson___authors'
  | 'internalLink___childrenShowcasesJson___tags'
  | 'internalLink___childrenShowcasesJson___description'
  | 'internalLink___childrenShowcasesJson___link'
  | 'internalLink___childrenShowcasesJson___sourceCodeLink'
  | 'internalLink___childrenShowcasesJson___internalLink___sourceInstanceName'
  | 'internalLink___childrenShowcasesJson___internalLink___absolutePath'
  | 'internalLink___childrenShowcasesJson___internalLink___relativePath'
  | 'internalLink___childrenShowcasesJson___internalLink___extension'
  | 'internalLink___childrenShowcasesJson___internalLink___size'
  | 'internalLink___childrenShowcasesJson___internalLink___prettySize'
  | 'internalLink___childrenShowcasesJson___internalLink___modifiedTime'
  | 'internalLink___childrenShowcasesJson___internalLink___accessTime'
  | 'internalLink___childrenShowcasesJson___internalLink___changeTime'
  | 'internalLink___childrenShowcasesJson___internalLink___birthTime'
  | 'internalLink___childrenShowcasesJson___internalLink___root'
  | 'internalLink___childrenShowcasesJson___internalLink___dir'
  | 'internalLink___childrenShowcasesJson___internalLink___base'
  | 'internalLink___childrenShowcasesJson___internalLink___ext'
  | 'internalLink___childrenShowcasesJson___internalLink___name'
  | 'internalLink___childrenShowcasesJson___internalLink___relativeDirectory'
  | 'internalLink___childrenShowcasesJson___internalLink___dev'
  | 'internalLink___childrenShowcasesJson___internalLink___mode'
  | 'internalLink___childrenShowcasesJson___internalLink___nlink'
  | 'internalLink___childrenShowcasesJson___internalLink___uid'
  | 'internalLink___childrenShowcasesJson___internalLink___gid'
  | 'internalLink___childrenShowcasesJson___internalLink___rdev'
  | 'internalLink___childrenShowcasesJson___internalLink___ino'
  | 'internalLink___childrenShowcasesJson___internalLink___atimeMs'
  | 'internalLink___childrenShowcasesJson___internalLink___mtimeMs'
  | 'internalLink___childrenShowcasesJson___internalLink___ctimeMs'
  | 'internalLink___childrenShowcasesJson___internalLink___atime'
  | 'internalLink___childrenShowcasesJson___internalLink___mtime'
  | 'internalLink___childrenShowcasesJson___internalLink___ctime'
  | 'internalLink___childrenShowcasesJson___internalLink___birthtime'
  | 'internalLink___childrenShowcasesJson___internalLink___birthtimeMs'
  | 'internalLink___childrenShowcasesJson___internalLink___blksize'
  | 'internalLink___childrenShowcasesJson___internalLink___blocks'
  | 'internalLink___childrenShowcasesJson___internalLink___publicURL'
  | 'internalLink___childrenShowcasesJson___internalLink___childrenSkillsJson'
  | 'internalLink___childrenShowcasesJson___internalLink___childrenShowcasesJson'
  | 'internalLink___childrenShowcasesJson___internalLink___childrenExperienceJson'
  | 'internalLink___childrenShowcasesJson___internalLink___childrenAboutMeJson'
  | 'internalLink___childrenShowcasesJson___internalLink___id'
  | 'internalLink___childrenShowcasesJson___internalLink___children'
  | 'internalLink___childShowcasesJson___id'
  | 'internalLink___childShowcasesJson___parent___id'
  | 'internalLink___childShowcasesJson___parent___children'
  | 'internalLink___childShowcasesJson___children'
  | 'internalLink___childShowcasesJson___children___id'
  | 'internalLink___childShowcasesJson___children___children'
  | 'internalLink___childShowcasesJson___internal___content'
  | 'internalLink___childShowcasesJson___internal___contentDigest'
  | 'internalLink___childShowcasesJson___internal___description'
  | 'internalLink___childShowcasesJson___internal___fieldOwners'
  | 'internalLink___childShowcasesJson___internal___ignoreType'
  | 'internalLink___childShowcasesJson___internal___mediaType'
  | 'internalLink___childShowcasesJson___internal___owner'
  | 'internalLink___childShowcasesJson___internal___type'
  | 'internalLink___childShowcasesJson___title'
  | 'internalLink___childShowcasesJson___type'
  | 'internalLink___childShowcasesJson___subtitle'
  | 'internalLink___childShowcasesJson___image___sourceInstanceName'
  | 'internalLink___childShowcasesJson___image___absolutePath'
  | 'internalLink___childShowcasesJson___image___relativePath'
  | 'internalLink___childShowcasesJson___image___extension'
  | 'internalLink___childShowcasesJson___image___size'
  | 'internalLink___childShowcasesJson___image___prettySize'
  | 'internalLink___childShowcasesJson___image___modifiedTime'
  | 'internalLink___childShowcasesJson___image___accessTime'
  | 'internalLink___childShowcasesJson___image___changeTime'
  | 'internalLink___childShowcasesJson___image___birthTime'
  | 'internalLink___childShowcasesJson___image___root'
  | 'internalLink___childShowcasesJson___image___dir'
  | 'internalLink___childShowcasesJson___image___base'
  | 'internalLink___childShowcasesJson___image___ext'
  | 'internalLink___childShowcasesJson___image___name'
  | 'internalLink___childShowcasesJson___image___relativeDirectory'
  | 'internalLink___childShowcasesJson___image___dev'
  | 'internalLink___childShowcasesJson___image___mode'
  | 'internalLink___childShowcasesJson___image___nlink'
  | 'internalLink___childShowcasesJson___image___uid'
  | 'internalLink___childShowcasesJson___image___gid'
  | 'internalLink___childShowcasesJson___image___rdev'
  | 'internalLink___childShowcasesJson___image___ino'
  | 'internalLink___childShowcasesJson___image___atimeMs'
  | 'internalLink___childShowcasesJson___image___mtimeMs'
  | 'internalLink___childShowcasesJson___image___ctimeMs'
  | 'internalLink___childShowcasesJson___image___atime'
  | 'internalLink___childShowcasesJson___image___mtime'
  | 'internalLink___childShowcasesJson___image___ctime'
  | 'internalLink___childShowcasesJson___image___birthtime'
  | 'internalLink___childShowcasesJson___image___birthtimeMs'
  | 'internalLink___childShowcasesJson___image___blksize'
  | 'internalLink___childShowcasesJson___image___blocks'
  | 'internalLink___childShowcasesJson___image___publicURL'
  | 'internalLink___childShowcasesJson___image___childrenSkillsJson'
  | 'internalLink___childShowcasesJson___image___childrenShowcasesJson'
  | 'internalLink___childShowcasesJson___image___childrenExperienceJson'
  | 'internalLink___childShowcasesJson___image___childrenAboutMeJson'
  | 'internalLink___childShowcasesJson___image___id'
  | 'internalLink___childShowcasesJson___image___children'
  | 'internalLink___childShowcasesJson___authors'
  | 'internalLink___childShowcasesJson___tags'
  | 'internalLink___childShowcasesJson___description'
  | 'internalLink___childShowcasesJson___link'
  | 'internalLink___childShowcasesJson___sourceCodeLink'
  | 'internalLink___childShowcasesJson___internalLink___sourceInstanceName'
  | 'internalLink___childShowcasesJson___internalLink___absolutePath'
  | 'internalLink___childShowcasesJson___internalLink___relativePath'
  | 'internalLink___childShowcasesJson___internalLink___extension'
  | 'internalLink___childShowcasesJson___internalLink___size'
  | 'internalLink___childShowcasesJson___internalLink___prettySize'
  | 'internalLink___childShowcasesJson___internalLink___modifiedTime'
  | 'internalLink___childShowcasesJson___internalLink___accessTime'
  | 'internalLink___childShowcasesJson___internalLink___changeTime'
  | 'internalLink___childShowcasesJson___internalLink___birthTime'
  | 'internalLink___childShowcasesJson___internalLink___root'
  | 'internalLink___childShowcasesJson___internalLink___dir'
  | 'internalLink___childShowcasesJson___internalLink___base'
  | 'internalLink___childShowcasesJson___internalLink___ext'
  | 'internalLink___childShowcasesJson___internalLink___name'
  | 'internalLink___childShowcasesJson___internalLink___relativeDirectory'
  | 'internalLink___childShowcasesJson___internalLink___dev'
  | 'internalLink___childShowcasesJson___internalLink___mode'
  | 'internalLink___childShowcasesJson___internalLink___nlink'
  | 'internalLink___childShowcasesJson___internalLink___uid'
  | 'internalLink___childShowcasesJson___internalLink___gid'
  | 'internalLink___childShowcasesJson___internalLink___rdev'
  | 'internalLink___childShowcasesJson___internalLink___ino'
  | 'internalLink___childShowcasesJson___internalLink___atimeMs'
  | 'internalLink___childShowcasesJson___internalLink___mtimeMs'
  | 'internalLink___childShowcasesJson___internalLink___ctimeMs'
  | 'internalLink___childShowcasesJson___internalLink___atime'
  | 'internalLink___childShowcasesJson___internalLink___mtime'
  | 'internalLink___childShowcasesJson___internalLink___ctime'
  | 'internalLink___childShowcasesJson___internalLink___birthtime'
  | 'internalLink___childShowcasesJson___internalLink___birthtimeMs'
  | 'internalLink___childShowcasesJson___internalLink___blksize'
  | 'internalLink___childShowcasesJson___internalLink___blocks'
  | 'internalLink___childShowcasesJson___internalLink___publicURL'
  | 'internalLink___childShowcasesJson___internalLink___childrenSkillsJson'
  | 'internalLink___childShowcasesJson___internalLink___childrenShowcasesJson'
  | 'internalLink___childShowcasesJson___internalLink___childrenExperienceJson'
  | 'internalLink___childShowcasesJson___internalLink___childrenAboutMeJson'
  | 'internalLink___childShowcasesJson___internalLink___id'
  | 'internalLink___childShowcasesJson___internalLink___children'
  | 'internalLink___childrenExperienceJson'
  | 'internalLink___childrenExperienceJson___id'
  | 'internalLink___childrenExperienceJson___parent___id'
  | 'internalLink___childrenExperienceJson___parent___children'
  | 'internalLink___childrenExperienceJson___children'
  | 'internalLink___childrenExperienceJson___children___id'
  | 'internalLink___childrenExperienceJson___children___children'
  | 'internalLink___childrenExperienceJson___internal___content'
  | 'internalLink___childrenExperienceJson___internal___contentDigest'
  | 'internalLink___childrenExperienceJson___internal___description'
  | 'internalLink___childrenExperienceJson___internal___fieldOwners'
  | 'internalLink___childrenExperienceJson___internal___ignoreType'
  | 'internalLink___childrenExperienceJson___internal___mediaType'
  | 'internalLink___childrenExperienceJson___internal___owner'
  | 'internalLink___childrenExperienceJson___internal___type'
  | 'internalLink___childrenExperienceJson___dataId'
  | 'internalLink___childrenExperienceJson___type'
  | 'internalLink___childrenExperienceJson___logo___sourceInstanceName'
  | 'internalLink___childrenExperienceJson___logo___absolutePath'
  | 'internalLink___childrenExperienceJson___logo___relativePath'
  | 'internalLink___childrenExperienceJson___logo___extension'
  | 'internalLink___childrenExperienceJson___logo___size'
  | 'internalLink___childrenExperienceJson___logo___prettySize'
  | 'internalLink___childrenExperienceJson___logo___modifiedTime'
  | 'internalLink___childrenExperienceJson___logo___accessTime'
  | 'internalLink___childrenExperienceJson___logo___changeTime'
  | 'internalLink___childrenExperienceJson___logo___birthTime'
  | 'internalLink___childrenExperienceJson___logo___root'
  | 'internalLink___childrenExperienceJson___logo___dir'
  | 'internalLink___childrenExperienceJson___logo___base'
  | 'internalLink___childrenExperienceJson___logo___ext'
  | 'internalLink___childrenExperienceJson___logo___name'
  | 'internalLink___childrenExperienceJson___logo___relativeDirectory'
  | 'internalLink___childrenExperienceJson___logo___dev'
  | 'internalLink___childrenExperienceJson___logo___mode'
  | 'internalLink___childrenExperienceJson___logo___nlink'
  | 'internalLink___childrenExperienceJson___logo___uid'
  | 'internalLink___childrenExperienceJson___logo___gid'
  | 'internalLink___childrenExperienceJson___logo___rdev'
  | 'internalLink___childrenExperienceJson___logo___ino'
  | 'internalLink___childrenExperienceJson___logo___atimeMs'
  | 'internalLink___childrenExperienceJson___logo___mtimeMs'
  | 'internalLink___childrenExperienceJson___logo___ctimeMs'
  | 'internalLink___childrenExperienceJson___logo___atime'
  | 'internalLink___childrenExperienceJson___logo___mtime'
  | 'internalLink___childrenExperienceJson___logo___ctime'
  | 'internalLink___childrenExperienceJson___logo___birthtime'
  | 'internalLink___childrenExperienceJson___logo___birthtimeMs'
  | 'internalLink___childrenExperienceJson___logo___blksize'
  | 'internalLink___childrenExperienceJson___logo___blocks'
  | 'internalLink___childrenExperienceJson___logo___publicURL'
  | 'internalLink___childrenExperienceJson___logo___childrenSkillsJson'
  | 'internalLink___childrenExperienceJson___logo___childrenShowcasesJson'
  | 'internalLink___childrenExperienceJson___logo___childrenExperienceJson'
  | 'internalLink___childrenExperienceJson___logo___childrenAboutMeJson'
  | 'internalLink___childrenExperienceJson___logo___id'
  | 'internalLink___childrenExperienceJson___logo___children'
  | 'internalLink___childrenExperienceJson___title'
  | 'internalLink___childrenExperienceJson___subtitle'
  | 'internalLink___childrenExperienceJson___startDate'
  | 'internalLink___childrenExperienceJson___endDate'
  | 'internalLink___childrenExperienceJson___description'
  | 'internalLink___childExperienceJson___id'
  | 'internalLink___childExperienceJson___parent___id'
  | 'internalLink___childExperienceJson___parent___children'
  | 'internalLink___childExperienceJson___children'
  | 'internalLink___childExperienceJson___children___id'
  | 'internalLink___childExperienceJson___children___children'
  | 'internalLink___childExperienceJson___internal___content'
  | 'internalLink___childExperienceJson___internal___contentDigest'
  | 'internalLink___childExperienceJson___internal___description'
  | 'internalLink___childExperienceJson___internal___fieldOwners'
  | 'internalLink___childExperienceJson___internal___ignoreType'
  | 'internalLink___childExperienceJson___internal___mediaType'
  | 'internalLink___childExperienceJson___internal___owner'
  | 'internalLink___childExperienceJson___internal___type'
  | 'internalLink___childExperienceJson___dataId'
  | 'internalLink___childExperienceJson___type'
  | 'internalLink___childExperienceJson___logo___sourceInstanceName'
  | 'internalLink___childExperienceJson___logo___absolutePath'
  | 'internalLink___childExperienceJson___logo___relativePath'
  | 'internalLink___childExperienceJson___logo___extension'
  | 'internalLink___childExperienceJson___logo___size'
  | 'internalLink___childExperienceJson___logo___prettySize'
  | 'internalLink___childExperienceJson___logo___modifiedTime'
  | 'internalLink___childExperienceJson___logo___accessTime'
  | 'internalLink___childExperienceJson___logo___changeTime'
  | 'internalLink___childExperienceJson___logo___birthTime'
  | 'internalLink___childExperienceJson___logo___root'
  | 'internalLink___childExperienceJson___logo___dir'
  | 'internalLink___childExperienceJson___logo___base'
  | 'internalLink___childExperienceJson___logo___ext'
  | 'internalLink___childExperienceJson___logo___name'
  | 'internalLink___childExperienceJson___logo___relativeDirectory'
  | 'internalLink___childExperienceJson___logo___dev'
  | 'internalLink___childExperienceJson___logo___mode'
  | 'internalLink___childExperienceJson___logo___nlink'
  | 'internalLink___childExperienceJson___logo___uid'
  | 'internalLink___childExperienceJson___logo___gid'
  | 'internalLink___childExperienceJson___logo___rdev'
  | 'internalLink___childExperienceJson___logo___ino'
  | 'internalLink___childExperienceJson___logo___atimeMs'
  | 'internalLink___childExperienceJson___logo___mtimeMs'
  | 'internalLink___childExperienceJson___logo___ctimeMs'
  | 'internalLink___childExperienceJson___logo___atime'
  | 'internalLink___childExperienceJson___logo___mtime'
  | 'internalLink___childExperienceJson___logo___ctime'
  | 'internalLink___childExperienceJson___logo___birthtime'
  | 'internalLink___childExperienceJson___logo___birthtimeMs'
  | 'internalLink___childExperienceJson___logo___blksize'
  | 'internalLink___childExperienceJson___logo___blocks'
  | 'internalLink___childExperienceJson___logo___publicURL'
  | 'internalLink___childExperienceJson___logo___childrenSkillsJson'
  | 'internalLink___childExperienceJson___logo___childrenShowcasesJson'
  | 'internalLink___childExperienceJson___logo___childrenExperienceJson'
  | 'internalLink___childExperienceJson___logo___childrenAboutMeJson'
  | 'internalLink___childExperienceJson___logo___id'
  | 'internalLink___childExperienceJson___logo___children'
  | 'internalLink___childExperienceJson___title'
  | 'internalLink___childExperienceJson___subtitle'
  | 'internalLink___childExperienceJson___startDate'
  | 'internalLink___childExperienceJson___endDate'
  | 'internalLink___childExperienceJson___description'
  | 'internalLink___childrenAboutMeJson'
  | 'internalLink___childrenAboutMeJson___id'
  | 'internalLink___childrenAboutMeJson___parent___id'
  | 'internalLink___childrenAboutMeJson___parent___children'
  | 'internalLink___childrenAboutMeJson___children'
  | 'internalLink___childrenAboutMeJson___children___id'
  | 'internalLink___childrenAboutMeJson___children___children'
  | 'internalLink___childrenAboutMeJson___internal___content'
  | 'internalLink___childrenAboutMeJson___internal___contentDigest'
  | 'internalLink___childrenAboutMeJson___internal___description'
  | 'internalLink___childrenAboutMeJson___internal___fieldOwners'
  | 'internalLink___childrenAboutMeJson___internal___ignoreType'
  | 'internalLink___childrenAboutMeJson___internal___mediaType'
  | 'internalLink___childrenAboutMeJson___internal___owner'
  | 'internalLink___childrenAboutMeJson___internal___type'
  | 'internalLink___childrenAboutMeJson___dataId'
  | 'internalLink___childrenAboutMeJson___title'
  | 'internalLink___childrenAboutMeJson___description'
  | 'internalLink___childrenAboutMeJson___shortDescription'
  | 'internalLink___childrenAboutMeJson___urls___gravatar'
  | 'internalLink___childrenAboutMeJson___contactDetails___label'
  | 'internalLink___childrenAboutMeJson___contactDetails___name'
  | 'internalLink___childrenAboutMeJson___contactDetails___zip'
  | 'internalLink___childrenAboutMeJson___contactDetails___city'
  | 'internalLink___childrenAboutMeJson___contactDetails___country'
  | 'internalLink___childrenAboutMeJson___contactDetails___email'
  | 'internalLink___childrenAboutMeJson___downloadResumeLabel'
  | 'internalLink___childrenAboutMeJson___contactLabel'
  | 'internalLink___childAboutMeJson___id'
  | 'internalLink___childAboutMeJson___parent___id'
  | 'internalLink___childAboutMeJson___parent___children'
  | 'internalLink___childAboutMeJson___children'
  | 'internalLink___childAboutMeJson___children___id'
  | 'internalLink___childAboutMeJson___children___children'
  | 'internalLink___childAboutMeJson___internal___content'
  | 'internalLink___childAboutMeJson___internal___contentDigest'
  | 'internalLink___childAboutMeJson___internal___description'
  | 'internalLink___childAboutMeJson___internal___fieldOwners'
  | 'internalLink___childAboutMeJson___internal___ignoreType'
  | 'internalLink___childAboutMeJson___internal___mediaType'
  | 'internalLink___childAboutMeJson___internal___owner'
  | 'internalLink___childAboutMeJson___internal___type'
  | 'internalLink___childAboutMeJson___dataId'
  | 'internalLink___childAboutMeJson___title'
  | 'internalLink___childAboutMeJson___description'
  | 'internalLink___childAboutMeJson___shortDescription'
  | 'internalLink___childAboutMeJson___urls___gravatar'
  | 'internalLink___childAboutMeJson___contactDetails___label'
  | 'internalLink___childAboutMeJson___contactDetails___name'
  | 'internalLink___childAboutMeJson___contactDetails___zip'
  | 'internalLink___childAboutMeJson___contactDetails___city'
  | 'internalLink___childAboutMeJson___contactDetails___country'
  | 'internalLink___childAboutMeJson___contactDetails___email'
  | 'internalLink___childAboutMeJson___downloadResumeLabel'
  | 'internalLink___childAboutMeJson___contactLabel'
  | 'internalLink___id'
  | 'internalLink___parent___id'
  | 'internalLink___parent___parent___id'
  | 'internalLink___parent___parent___children'
  | 'internalLink___parent___children'
  | 'internalLink___parent___children___id'
  | 'internalLink___parent___children___children'
  | 'internalLink___parent___internal___content'
  | 'internalLink___parent___internal___contentDigest'
  | 'internalLink___parent___internal___description'
  | 'internalLink___parent___internal___fieldOwners'
  | 'internalLink___parent___internal___ignoreType'
  | 'internalLink___parent___internal___mediaType'
  | 'internalLink___parent___internal___owner'
  | 'internalLink___parent___internal___type'
  | 'internalLink___children'
  | 'internalLink___children___id'
  | 'internalLink___children___parent___id'
  | 'internalLink___children___parent___children'
  | 'internalLink___children___children'
  | 'internalLink___children___children___id'
  | 'internalLink___children___children___children'
  | 'internalLink___children___internal___content'
  | 'internalLink___children___internal___contentDigest'
  | 'internalLink___children___internal___description'
  | 'internalLink___children___internal___fieldOwners'
  | 'internalLink___children___internal___ignoreType'
  | 'internalLink___children___internal___mediaType'
  | 'internalLink___children___internal___owner'
  | 'internalLink___children___internal___type'
  | 'internalLink___internal___content'
  | 'internalLink___internal___contentDigest'
  | 'internalLink___internal___description'
  | 'internalLink___internal___fieldOwners'
  | 'internalLink___internal___ignoreType'
  | 'internalLink___internal___mediaType'
  | 'internalLink___internal___owner'
  | 'internalLink___internal___type';

export type ShowcasesJsonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShowcasesJsonEdge>;
  nodes: Array<ShowcasesJson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ShowcasesJsonSortInput = {
  fields?: Maybe<Array<Maybe<ShowcasesJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ExperienceJsonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ExperienceJsonEdge>;
  nodes: Array<ExperienceJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ExperienceJsonGroupConnection>;
};


export type ExperienceJsonConnectionDistinctArgs = {
  field: ExperienceJsonFieldsEnum;
};


export type ExperienceJsonConnectionMaxArgs = {
  field: ExperienceJsonFieldsEnum;
};


export type ExperienceJsonConnectionMinArgs = {
  field: ExperienceJsonFieldsEnum;
};


export type ExperienceJsonConnectionSumArgs = {
  field: ExperienceJsonFieldsEnum;
};


export type ExperienceJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ExperienceJsonFieldsEnum;
};

export type ExperienceJsonEdge = {
  next?: Maybe<ExperienceJson>;
  node: ExperienceJson;
  previous?: Maybe<ExperienceJson>;
};

export type ExperienceJsonFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'dataId'
  | 'type'
  | 'logo___sourceInstanceName'
  | 'logo___absolutePath'
  | 'logo___relativePath'
  | 'logo___extension'
  | 'logo___size'
  | 'logo___prettySize'
  | 'logo___modifiedTime'
  | 'logo___accessTime'
  | 'logo___changeTime'
  | 'logo___birthTime'
  | 'logo___root'
  | 'logo___dir'
  | 'logo___base'
  | 'logo___ext'
  | 'logo___name'
  | 'logo___relativeDirectory'
  | 'logo___dev'
  | 'logo___mode'
  | 'logo___nlink'
  | 'logo___uid'
  | 'logo___gid'
  | 'logo___rdev'
  | 'logo___ino'
  | 'logo___atimeMs'
  | 'logo___mtimeMs'
  | 'logo___ctimeMs'
  | 'logo___atime'
  | 'logo___mtime'
  | 'logo___ctime'
  | 'logo___birthtime'
  | 'logo___birthtimeMs'
  | 'logo___blksize'
  | 'logo___blocks'
  | 'logo___publicURL'
  | 'logo___childrenSkillsJson'
  | 'logo___childrenSkillsJson___id'
  | 'logo___childrenSkillsJson___parent___id'
  | 'logo___childrenSkillsJson___parent___children'
  | 'logo___childrenSkillsJson___children'
  | 'logo___childrenSkillsJson___children___id'
  | 'logo___childrenSkillsJson___children___children'
  | 'logo___childrenSkillsJson___internal___content'
  | 'logo___childrenSkillsJson___internal___contentDigest'
  | 'logo___childrenSkillsJson___internal___description'
  | 'logo___childrenSkillsJson___internal___fieldOwners'
  | 'logo___childrenSkillsJson___internal___ignoreType'
  | 'logo___childrenSkillsJson___internal___mediaType'
  | 'logo___childrenSkillsJson___internal___owner'
  | 'logo___childrenSkillsJson___internal___type'
  | 'logo___childrenSkillsJson___name'
  | 'logo___childrenSkillsJson___shortName'
  | 'logo___childrenSkillsJson___type'
  | 'logo___childrenSkillsJson___description'
  | 'logo___childrenSkillsJson___startDate'
  | 'logo___childrenSkillsJson___endDate'
  | 'logo___childrenSkillsJson___logo___sourceInstanceName'
  | 'logo___childrenSkillsJson___logo___absolutePath'
  | 'logo___childrenSkillsJson___logo___relativePath'
  | 'logo___childrenSkillsJson___logo___extension'
  | 'logo___childrenSkillsJson___logo___size'
  | 'logo___childrenSkillsJson___logo___prettySize'
  | 'logo___childrenSkillsJson___logo___modifiedTime'
  | 'logo___childrenSkillsJson___logo___accessTime'
  | 'logo___childrenSkillsJson___logo___changeTime'
  | 'logo___childrenSkillsJson___logo___birthTime'
  | 'logo___childrenSkillsJson___logo___root'
  | 'logo___childrenSkillsJson___logo___dir'
  | 'logo___childrenSkillsJson___logo___base'
  | 'logo___childrenSkillsJson___logo___ext'
  | 'logo___childrenSkillsJson___logo___name'
  | 'logo___childrenSkillsJson___logo___relativeDirectory'
  | 'logo___childrenSkillsJson___logo___dev'
  | 'logo___childrenSkillsJson___logo___mode'
  | 'logo___childrenSkillsJson___logo___nlink'
  | 'logo___childrenSkillsJson___logo___uid'
  | 'logo___childrenSkillsJson___logo___gid'
  | 'logo___childrenSkillsJson___logo___rdev'
  | 'logo___childrenSkillsJson___logo___ino'
  | 'logo___childrenSkillsJson___logo___atimeMs'
  | 'logo___childrenSkillsJson___logo___mtimeMs'
  | 'logo___childrenSkillsJson___logo___ctimeMs'
  | 'logo___childrenSkillsJson___logo___atime'
  | 'logo___childrenSkillsJson___logo___mtime'
  | 'logo___childrenSkillsJson___logo___ctime'
  | 'logo___childrenSkillsJson___logo___birthtime'
  | 'logo___childrenSkillsJson___logo___birthtimeMs'
  | 'logo___childrenSkillsJson___logo___blksize'
  | 'logo___childrenSkillsJson___logo___blocks'
  | 'logo___childrenSkillsJson___logo___publicURL'
  | 'logo___childrenSkillsJson___logo___childrenSkillsJson'
  | 'logo___childrenSkillsJson___logo___childrenShowcasesJson'
  | 'logo___childrenSkillsJson___logo___childrenExperienceJson'
  | 'logo___childrenSkillsJson___logo___childrenAboutMeJson'
  | 'logo___childrenSkillsJson___logo___id'
  | 'logo___childrenSkillsJson___logo___children'
  | 'logo___childrenSkillsJson___rating'
  | 'logo___childrenSkillsJson___skillLevel'
  | 'logo___childrenSkillsJson___link'
  | 'logo___childSkillsJson___id'
  | 'logo___childSkillsJson___parent___id'
  | 'logo___childSkillsJson___parent___children'
  | 'logo___childSkillsJson___children'
  | 'logo___childSkillsJson___children___id'
  | 'logo___childSkillsJson___children___children'
  | 'logo___childSkillsJson___internal___content'
  | 'logo___childSkillsJson___internal___contentDigest'
  | 'logo___childSkillsJson___internal___description'
  | 'logo___childSkillsJson___internal___fieldOwners'
  | 'logo___childSkillsJson___internal___ignoreType'
  | 'logo___childSkillsJson___internal___mediaType'
  | 'logo___childSkillsJson___internal___owner'
  | 'logo___childSkillsJson___internal___type'
  | 'logo___childSkillsJson___name'
  | 'logo___childSkillsJson___shortName'
  | 'logo___childSkillsJson___type'
  | 'logo___childSkillsJson___description'
  | 'logo___childSkillsJson___startDate'
  | 'logo___childSkillsJson___endDate'
  | 'logo___childSkillsJson___logo___sourceInstanceName'
  | 'logo___childSkillsJson___logo___absolutePath'
  | 'logo___childSkillsJson___logo___relativePath'
  | 'logo___childSkillsJson___logo___extension'
  | 'logo___childSkillsJson___logo___size'
  | 'logo___childSkillsJson___logo___prettySize'
  | 'logo___childSkillsJson___logo___modifiedTime'
  | 'logo___childSkillsJson___logo___accessTime'
  | 'logo___childSkillsJson___logo___changeTime'
  | 'logo___childSkillsJson___logo___birthTime'
  | 'logo___childSkillsJson___logo___root'
  | 'logo___childSkillsJson___logo___dir'
  | 'logo___childSkillsJson___logo___base'
  | 'logo___childSkillsJson___logo___ext'
  | 'logo___childSkillsJson___logo___name'
  | 'logo___childSkillsJson___logo___relativeDirectory'
  | 'logo___childSkillsJson___logo___dev'
  | 'logo___childSkillsJson___logo___mode'
  | 'logo___childSkillsJson___logo___nlink'
  | 'logo___childSkillsJson___logo___uid'
  | 'logo___childSkillsJson___logo___gid'
  | 'logo___childSkillsJson___logo___rdev'
  | 'logo___childSkillsJson___logo___ino'
  | 'logo___childSkillsJson___logo___atimeMs'
  | 'logo___childSkillsJson___logo___mtimeMs'
  | 'logo___childSkillsJson___logo___ctimeMs'
  | 'logo___childSkillsJson___logo___atime'
  | 'logo___childSkillsJson___logo___mtime'
  | 'logo___childSkillsJson___logo___ctime'
  | 'logo___childSkillsJson___logo___birthtime'
  | 'logo___childSkillsJson___logo___birthtimeMs'
  | 'logo___childSkillsJson___logo___blksize'
  | 'logo___childSkillsJson___logo___blocks'
  | 'logo___childSkillsJson___logo___publicURL'
  | 'logo___childSkillsJson___logo___childrenSkillsJson'
  | 'logo___childSkillsJson___logo___childrenShowcasesJson'
  | 'logo___childSkillsJson___logo___childrenExperienceJson'
  | 'logo___childSkillsJson___logo___childrenAboutMeJson'
  | 'logo___childSkillsJson___logo___id'
  | 'logo___childSkillsJson___logo___children'
  | 'logo___childSkillsJson___rating'
  | 'logo___childSkillsJson___skillLevel'
  | 'logo___childSkillsJson___link'
  | 'logo___childrenShowcasesJson'
  | 'logo___childrenShowcasesJson___id'
  | 'logo___childrenShowcasesJson___parent___id'
  | 'logo___childrenShowcasesJson___parent___children'
  | 'logo___childrenShowcasesJson___children'
  | 'logo___childrenShowcasesJson___children___id'
  | 'logo___childrenShowcasesJson___children___children'
  | 'logo___childrenShowcasesJson___internal___content'
  | 'logo___childrenShowcasesJson___internal___contentDigest'
  | 'logo___childrenShowcasesJson___internal___description'
  | 'logo___childrenShowcasesJson___internal___fieldOwners'
  | 'logo___childrenShowcasesJson___internal___ignoreType'
  | 'logo___childrenShowcasesJson___internal___mediaType'
  | 'logo___childrenShowcasesJson___internal___owner'
  | 'logo___childrenShowcasesJson___internal___type'
  | 'logo___childrenShowcasesJson___title'
  | 'logo___childrenShowcasesJson___type'
  | 'logo___childrenShowcasesJson___subtitle'
  | 'logo___childrenShowcasesJson___image___sourceInstanceName'
  | 'logo___childrenShowcasesJson___image___absolutePath'
  | 'logo___childrenShowcasesJson___image___relativePath'
  | 'logo___childrenShowcasesJson___image___extension'
  | 'logo___childrenShowcasesJson___image___size'
  | 'logo___childrenShowcasesJson___image___prettySize'
  | 'logo___childrenShowcasesJson___image___modifiedTime'
  | 'logo___childrenShowcasesJson___image___accessTime'
  | 'logo___childrenShowcasesJson___image___changeTime'
  | 'logo___childrenShowcasesJson___image___birthTime'
  | 'logo___childrenShowcasesJson___image___root'
  | 'logo___childrenShowcasesJson___image___dir'
  | 'logo___childrenShowcasesJson___image___base'
  | 'logo___childrenShowcasesJson___image___ext'
  | 'logo___childrenShowcasesJson___image___name'
  | 'logo___childrenShowcasesJson___image___relativeDirectory'
  | 'logo___childrenShowcasesJson___image___dev'
  | 'logo___childrenShowcasesJson___image___mode'
  | 'logo___childrenShowcasesJson___image___nlink'
  | 'logo___childrenShowcasesJson___image___uid'
  | 'logo___childrenShowcasesJson___image___gid'
  | 'logo___childrenShowcasesJson___image___rdev'
  | 'logo___childrenShowcasesJson___image___ino'
  | 'logo___childrenShowcasesJson___image___atimeMs'
  | 'logo___childrenShowcasesJson___image___mtimeMs'
  | 'logo___childrenShowcasesJson___image___ctimeMs'
  | 'logo___childrenShowcasesJson___image___atime'
  | 'logo___childrenShowcasesJson___image___mtime'
  | 'logo___childrenShowcasesJson___image___ctime'
  | 'logo___childrenShowcasesJson___image___birthtime'
  | 'logo___childrenShowcasesJson___image___birthtimeMs'
  | 'logo___childrenShowcasesJson___image___blksize'
  | 'logo___childrenShowcasesJson___image___blocks'
  | 'logo___childrenShowcasesJson___image___publicURL'
  | 'logo___childrenShowcasesJson___image___childrenSkillsJson'
  | 'logo___childrenShowcasesJson___image___childrenShowcasesJson'
  | 'logo___childrenShowcasesJson___image___childrenExperienceJson'
  | 'logo___childrenShowcasesJson___image___childrenAboutMeJson'
  | 'logo___childrenShowcasesJson___image___id'
  | 'logo___childrenShowcasesJson___image___children'
  | 'logo___childrenShowcasesJson___authors'
  | 'logo___childrenShowcasesJson___tags'
  | 'logo___childrenShowcasesJson___description'
  | 'logo___childrenShowcasesJson___link'
  | 'logo___childrenShowcasesJson___sourceCodeLink'
  | 'logo___childrenShowcasesJson___internalLink___sourceInstanceName'
  | 'logo___childrenShowcasesJson___internalLink___absolutePath'
  | 'logo___childrenShowcasesJson___internalLink___relativePath'
  | 'logo___childrenShowcasesJson___internalLink___extension'
  | 'logo___childrenShowcasesJson___internalLink___size'
  | 'logo___childrenShowcasesJson___internalLink___prettySize'
  | 'logo___childrenShowcasesJson___internalLink___modifiedTime'
  | 'logo___childrenShowcasesJson___internalLink___accessTime'
  | 'logo___childrenShowcasesJson___internalLink___changeTime'
  | 'logo___childrenShowcasesJson___internalLink___birthTime'
  | 'logo___childrenShowcasesJson___internalLink___root'
  | 'logo___childrenShowcasesJson___internalLink___dir'
  | 'logo___childrenShowcasesJson___internalLink___base'
  | 'logo___childrenShowcasesJson___internalLink___ext'
  | 'logo___childrenShowcasesJson___internalLink___name'
  | 'logo___childrenShowcasesJson___internalLink___relativeDirectory'
  | 'logo___childrenShowcasesJson___internalLink___dev'
  | 'logo___childrenShowcasesJson___internalLink___mode'
  | 'logo___childrenShowcasesJson___internalLink___nlink'
  | 'logo___childrenShowcasesJson___internalLink___uid'
  | 'logo___childrenShowcasesJson___internalLink___gid'
  | 'logo___childrenShowcasesJson___internalLink___rdev'
  | 'logo___childrenShowcasesJson___internalLink___ino'
  | 'logo___childrenShowcasesJson___internalLink___atimeMs'
  | 'logo___childrenShowcasesJson___internalLink___mtimeMs'
  | 'logo___childrenShowcasesJson___internalLink___ctimeMs'
  | 'logo___childrenShowcasesJson___internalLink___atime'
  | 'logo___childrenShowcasesJson___internalLink___mtime'
  | 'logo___childrenShowcasesJson___internalLink___ctime'
  | 'logo___childrenShowcasesJson___internalLink___birthtime'
  | 'logo___childrenShowcasesJson___internalLink___birthtimeMs'
  | 'logo___childrenShowcasesJson___internalLink___blksize'
  | 'logo___childrenShowcasesJson___internalLink___blocks'
  | 'logo___childrenShowcasesJson___internalLink___publicURL'
  | 'logo___childrenShowcasesJson___internalLink___childrenSkillsJson'
  | 'logo___childrenShowcasesJson___internalLink___childrenShowcasesJson'
  | 'logo___childrenShowcasesJson___internalLink___childrenExperienceJson'
  | 'logo___childrenShowcasesJson___internalLink___childrenAboutMeJson'
  | 'logo___childrenShowcasesJson___internalLink___id'
  | 'logo___childrenShowcasesJson___internalLink___children'
  | 'logo___childShowcasesJson___id'
  | 'logo___childShowcasesJson___parent___id'
  | 'logo___childShowcasesJson___parent___children'
  | 'logo___childShowcasesJson___children'
  | 'logo___childShowcasesJson___children___id'
  | 'logo___childShowcasesJson___children___children'
  | 'logo___childShowcasesJson___internal___content'
  | 'logo___childShowcasesJson___internal___contentDigest'
  | 'logo___childShowcasesJson___internal___description'
  | 'logo___childShowcasesJson___internal___fieldOwners'
  | 'logo___childShowcasesJson___internal___ignoreType'
  | 'logo___childShowcasesJson___internal___mediaType'
  | 'logo___childShowcasesJson___internal___owner'
  | 'logo___childShowcasesJson___internal___type'
  | 'logo___childShowcasesJson___title'
  | 'logo___childShowcasesJson___type'
  | 'logo___childShowcasesJson___subtitle'
  | 'logo___childShowcasesJson___image___sourceInstanceName'
  | 'logo___childShowcasesJson___image___absolutePath'
  | 'logo___childShowcasesJson___image___relativePath'
  | 'logo___childShowcasesJson___image___extension'
  | 'logo___childShowcasesJson___image___size'
  | 'logo___childShowcasesJson___image___prettySize'
  | 'logo___childShowcasesJson___image___modifiedTime'
  | 'logo___childShowcasesJson___image___accessTime'
  | 'logo___childShowcasesJson___image___changeTime'
  | 'logo___childShowcasesJson___image___birthTime'
  | 'logo___childShowcasesJson___image___root'
  | 'logo___childShowcasesJson___image___dir'
  | 'logo___childShowcasesJson___image___base'
  | 'logo___childShowcasesJson___image___ext'
  | 'logo___childShowcasesJson___image___name'
  | 'logo___childShowcasesJson___image___relativeDirectory'
  | 'logo___childShowcasesJson___image___dev'
  | 'logo___childShowcasesJson___image___mode'
  | 'logo___childShowcasesJson___image___nlink'
  | 'logo___childShowcasesJson___image___uid'
  | 'logo___childShowcasesJson___image___gid'
  | 'logo___childShowcasesJson___image___rdev'
  | 'logo___childShowcasesJson___image___ino'
  | 'logo___childShowcasesJson___image___atimeMs'
  | 'logo___childShowcasesJson___image___mtimeMs'
  | 'logo___childShowcasesJson___image___ctimeMs'
  | 'logo___childShowcasesJson___image___atime'
  | 'logo___childShowcasesJson___image___mtime'
  | 'logo___childShowcasesJson___image___ctime'
  | 'logo___childShowcasesJson___image___birthtime'
  | 'logo___childShowcasesJson___image___birthtimeMs'
  | 'logo___childShowcasesJson___image___blksize'
  | 'logo___childShowcasesJson___image___blocks'
  | 'logo___childShowcasesJson___image___publicURL'
  | 'logo___childShowcasesJson___image___childrenSkillsJson'
  | 'logo___childShowcasesJson___image___childrenShowcasesJson'
  | 'logo___childShowcasesJson___image___childrenExperienceJson'
  | 'logo___childShowcasesJson___image___childrenAboutMeJson'
  | 'logo___childShowcasesJson___image___id'
  | 'logo___childShowcasesJson___image___children'
  | 'logo___childShowcasesJson___authors'
  | 'logo___childShowcasesJson___tags'
  | 'logo___childShowcasesJson___description'
  | 'logo___childShowcasesJson___link'
  | 'logo___childShowcasesJson___sourceCodeLink'
  | 'logo___childShowcasesJson___internalLink___sourceInstanceName'
  | 'logo___childShowcasesJson___internalLink___absolutePath'
  | 'logo___childShowcasesJson___internalLink___relativePath'
  | 'logo___childShowcasesJson___internalLink___extension'
  | 'logo___childShowcasesJson___internalLink___size'
  | 'logo___childShowcasesJson___internalLink___prettySize'
  | 'logo___childShowcasesJson___internalLink___modifiedTime'
  | 'logo___childShowcasesJson___internalLink___accessTime'
  | 'logo___childShowcasesJson___internalLink___changeTime'
  | 'logo___childShowcasesJson___internalLink___birthTime'
  | 'logo___childShowcasesJson___internalLink___root'
  | 'logo___childShowcasesJson___internalLink___dir'
  | 'logo___childShowcasesJson___internalLink___base'
  | 'logo___childShowcasesJson___internalLink___ext'
  | 'logo___childShowcasesJson___internalLink___name'
  | 'logo___childShowcasesJson___internalLink___relativeDirectory'
  | 'logo___childShowcasesJson___internalLink___dev'
  | 'logo___childShowcasesJson___internalLink___mode'
  | 'logo___childShowcasesJson___internalLink___nlink'
  | 'logo___childShowcasesJson___internalLink___uid'
  | 'logo___childShowcasesJson___internalLink___gid'
  | 'logo___childShowcasesJson___internalLink___rdev'
  | 'logo___childShowcasesJson___internalLink___ino'
  | 'logo___childShowcasesJson___internalLink___atimeMs'
  | 'logo___childShowcasesJson___internalLink___mtimeMs'
  | 'logo___childShowcasesJson___internalLink___ctimeMs'
  | 'logo___childShowcasesJson___internalLink___atime'
  | 'logo___childShowcasesJson___internalLink___mtime'
  | 'logo___childShowcasesJson___internalLink___ctime'
  | 'logo___childShowcasesJson___internalLink___birthtime'
  | 'logo___childShowcasesJson___internalLink___birthtimeMs'
  | 'logo___childShowcasesJson___internalLink___blksize'
  | 'logo___childShowcasesJson___internalLink___blocks'
  | 'logo___childShowcasesJson___internalLink___publicURL'
  | 'logo___childShowcasesJson___internalLink___childrenSkillsJson'
  | 'logo___childShowcasesJson___internalLink___childrenShowcasesJson'
  | 'logo___childShowcasesJson___internalLink___childrenExperienceJson'
  | 'logo___childShowcasesJson___internalLink___childrenAboutMeJson'
  | 'logo___childShowcasesJson___internalLink___id'
  | 'logo___childShowcasesJson___internalLink___children'
  | 'logo___childrenExperienceJson'
  | 'logo___childrenExperienceJson___id'
  | 'logo___childrenExperienceJson___parent___id'
  | 'logo___childrenExperienceJson___parent___children'
  | 'logo___childrenExperienceJson___children'
  | 'logo___childrenExperienceJson___children___id'
  | 'logo___childrenExperienceJson___children___children'
  | 'logo___childrenExperienceJson___internal___content'
  | 'logo___childrenExperienceJson___internal___contentDigest'
  | 'logo___childrenExperienceJson___internal___description'
  | 'logo___childrenExperienceJson___internal___fieldOwners'
  | 'logo___childrenExperienceJson___internal___ignoreType'
  | 'logo___childrenExperienceJson___internal___mediaType'
  | 'logo___childrenExperienceJson___internal___owner'
  | 'logo___childrenExperienceJson___internal___type'
  | 'logo___childrenExperienceJson___dataId'
  | 'logo___childrenExperienceJson___type'
  | 'logo___childrenExperienceJson___logo___sourceInstanceName'
  | 'logo___childrenExperienceJson___logo___absolutePath'
  | 'logo___childrenExperienceJson___logo___relativePath'
  | 'logo___childrenExperienceJson___logo___extension'
  | 'logo___childrenExperienceJson___logo___size'
  | 'logo___childrenExperienceJson___logo___prettySize'
  | 'logo___childrenExperienceJson___logo___modifiedTime'
  | 'logo___childrenExperienceJson___logo___accessTime'
  | 'logo___childrenExperienceJson___logo___changeTime'
  | 'logo___childrenExperienceJson___logo___birthTime'
  | 'logo___childrenExperienceJson___logo___root'
  | 'logo___childrenExperienceJson___logo___dir'
  | 'logo___childrenExperienceJson___logo___base'
  | 'logo___childrenExperienceJson___logo___ext'
  | 'logo___childrenExperienceJson___logo___name'
  | 'logo___childrenExperienceJson___logo___relativeDirectory'
  | 'logo___childrenExperienceJson___logo___dev'
  | 'logo___childrenExperienceJson___logo___mode'
  | 'logo___childrenExperienceJson___logo___nlink'
  | 'logo___childrenExperienceJson___logo___uid'
  | 'logo___childrenExperienceJson___logo___gid'
  | 'logo___childrenExperienceJson___logo___rdev'
  | 'logo___childrenExperienceJson___logo___ino'
  | 'logo___childrenExperienceJson___logo___atimeMs'
  | 'logo___childrenExperienceJson___logo___mtimeMs'
  | 'logo___childrenExperienceJson___logo___ctimeMs'
  | 'logo___childrenExperienceJson___logo___atime'
  | 'logo___childrenExperienceJson___logo___mtime'
  | 'logo___childrenExperienceJson___logo___ctime'
  | 'logo___childrenExperienceJson___logo___birthtime'
  | 'logo___childrenExperienceJson___logo___birthtimeMs'
  | 'logo___childrenExperienceJson___logo___blksize'
  | 'logo___childrenExperienceJson___logo___blocks'
  | 'logo___childrenExperienceJson___logo___publicURL'
  | 'logo___childrenExperienceJson___logo___childrenSkillsJson'
  | 'logo___childrenExperienceJson___logo___childrenShowcasesJson'
  | 'logo___childrenExperienceJson___logo___childrenExperienceJson'
  | 'logo___childrenExperienceJson___logo___childrenAboutMeJson'
  | 'logo___childrenExperienceJson___logo___id'
  | 'logo___childrenExperienceJson___logo___children'
  | 'logo___childrenExperienceJson___title'
  | 'logo___childrenExperienceJson___subtitle'
  | 'logo___childrenExperienceJson___startDate'
  | 'logo___childrenExperienceJson___endDate'
  | 'logo___childrenExperienceJson___description'
  | 'logo___childExperienceJson___id'
  | 'logo___childExperienceJson___parent___id'
  | 'logo___childExperienceJson___parent___children'
  | 'logo___childExperienceJson___children'
  | 'logo___childExperienceJson___children___id'
  | 'logo___childExperienceJson___children___children'
  | 'logo___childExperienceJson___internal___content'
  | 'logo___childExperienceJson___internal___contentDigest'
  | 'logo___childExperienceJson___internal___description'
  | 'logo___childExperienceJson___internal___fieldOwners'
  | 'logo___childExperienceJson___internal___ignoreType'
  | 'logo___childExperienceJson___internal___mediaType'
  | 'logo___childExperienceJson___internal___owner'
  | 'logo___childExperienceJson___internal___type'
  | 'logo___childExperienceJson___dataId'
  | 'logo___childExperienceJson___type'
  | 'logo___childExperienceJson___logo___sourceInstanceName'
  | 'logo___childExperienceJson___logo___absolutePath'
  | 'logo___childExperienceJson___logo___relativePath'
  | 'logo___childExperienceJson___logo___extension'
  | 'logo___childExperienceJson___logo___size'
  | 'logo___childExperienceJson___logo___prettySize'
  | 'logo___childExperienceJson___logo___modifiedTime'
  | 'logo___childExperienceJson___logo___accessTime'
  | 'logo___childExperienceJson___logo___changeTime'
  | 'logo___childExperienceJson___logo___birthTime'
  | 'logo___childExperienceJson___logo___root'
  | 'logo___childExperienceJson___logo___dir'
  | 'logo___childExperienceJson___logo___base'
  | 'logo___childExperienceJson___logo___ext'
  | 'logo___childExperienceJson___logo___name'
  | 'logo___childExperienceJson___logo___relativeDirectory'
  | 'logo___childExperienceJson___logo___dev'
  | 'logo___childExperienceJson___logo___mode'
  | 'logo___childExperienceJson___logo___nlink'
  | 'logo___childExperienceJson___logo___uid'
  | 'logo___childExperienceJson___logo___gid'
  | 'logo___childExperienceJson___logo___rdev'
  | 'logo___childExperienceJson___logo___ino'
  | 'logo___childExperienceJson___logo___atimeMs'
  | 'logo___childExperienceJson___logo___mtimeMs'
  | 'logo___childExperienceJson___logo___ctimeMs'
  | 'logo___childExperienceJson___logo___atime'
  | 'logo___childExperienceJson___logo___mtime'
  | 'logo___childExperienceJson___logo___ctime'
  | 'logo___childExperienceJson___logo___birthtime'
  | 'logo___childExperienceJson___logo___birthtimeMs'
  | 'logo___childExperienceJson___logo___blksize'
  | 'logo___childExperienceJson___logo___blocks'
  | 'logo___childExperienceJson___logo___publicURL'
  | 'logo___childExperienceJson___logo___childrenSkillsJson'
  | 'logo___childExperienceJson___logo___childrenShowcasesJson'
  | 'logo___childExperienceJson___logo___childrenExperienceJson'
  | 'logo___childExperienceJson___logo___childrenAboutMeJson'
  | 'logo___childExperienceJson___logo___id'
  | 'logo___childExperienceJson___logo___children'
  | 'logo___childExperienceJson___title'
  | 'logo___childExperienceJson___subtitle'
  | 'logo___childExperienceJson___startDate'
  | 'logo___childExperienceJson___endDate'
  | 'logo___childExperienceJson___description'
  | 'logo___childrenAboutMeJson'
  | 'logo___childrenAboutMeJson___id'
  | 'logo___childrenAboutMeJson___parent___id'
  | 'logo___childrenAboutMeJson___parent___children'
  | 'logo___childrenAboutMeJson___children'
  | 'logo___childrenAboutMeJson___children___id'
  | 'logo___childrenAboutMeJson___children___children'
  | 'logo___childrenAboutMeJson___internal___content'
  | 'logo___childrenAboutMeJson___internal___contentDigest'
  | 'logo___childrenAboutMeJson___internal___description'
  | 'logo___childrenAboutMeJson___internal___fieldOwners'
  | 'logo___childrenAboutMeJson___internal___ignoreType'
  | 'logo___childrenAboutMeJson___internal___mediaType'
  | 'logo___childrenAboutMeJson___internal___owner'
  | 'logo___childrenAboutMeJson___internal___type'
  | 'logo___childrenAboutMeJson___dataId'
  | 'logo___childrenAboutMeJson___title'
  | 'logo___childrenAboutMeJson___description'
  | 'logo___childrenAboutMeJson___shortDescription'
  | 'logo___childrenAboutMeJson___urls___gravatar'
  | 'logo___childrenAboutMeJson___contactDetails___label'
  | 'logo___childrenAboutMeJson___contactDetails___name'
  | 'logo___childrenAboutMeJson___contactDetails___zip'
  | 'logo___childrenAboutMeJson___contactDetails___city'
  | 'logo___childrenAboutMeJson___contactDetails___country'
  | 'logo___childrenAboutMeJson___contactDetails___email'
  | 'logo___childrenAboutMeJson___downloadResumeLabel'
  | 'logo___childrenAboutMeJson___contactLabel'
  | 'logo___childAboutMeJson___id'
  | 'logo___childAboutMeJson___parent___id'
  | 'logo___childAboutMeJson___parent___children'
  | 'logo___childAboutMeJson___children'
  | 'logo___childAboutMeJson___children___id'
  | 'logo___childAboutMeJson___children___children'
  | 'logo___childAboutMeJson___internal___content'
  | 'logo___childAboutMeJson___internal___contentDigest'
  | 'logo___childAboutMeJson___internal___description'
  | 'logo___childAboutMeJson___internal___fieldOwners'
  | 'logo___childAboutMeJson___internal___ignoreType'
  | 'logo___childAboutMeJson___internal___mediaType'
  | 'logo___childAboutMeJson___internal___owner'
  | 'logo___childAboutMeJson___internal___type'
  | 'logo___childAboutMeJson___dataId'
  | 'logo___childAboutMeJson___title'
  | 'logo___childAboutMeJson___description'
  | 'logo___childAboutMeJson___shortDescription'
  | 'logo___childAboutMeJson___urls___gravatar'
  | 'logo___childAboutMeJson___contactDetails___label'
  | 'logo___childAboutMeJson___contactDetails___name'
  | 'logo___childAboutMeJson___contactDetails___zip'
  | 'logo___childAboutMeJson___contactDetails___city'
  | 'logo___childAboutMeJson___contactDetails___country'
  | 'logo___childAboutMeJson___contactDetails___email'
  | 'logo___childAboutMeJson___downloadResumeLabel'
  | 'logo___childAboutMeJson___contactLabel'
  | 'logo___id'
  | 'logo___parent___id'
  | 'logo___parent___parent___id'
  | 'logo___parent___parent___children'
  | 'logo___parent___children'
  | 'logo___parent___children___id'
  | 'logo___parent___children___children'
  | 'logo___parent___internal___content'
  | 'logo___parent___internal___contentDigest'
  | 'logo___parent___internal___description'
  | 'logo___parent___internal___fieldOwners'
  | 'logo___parent___internal___ignoreType'
  | 'logo___parent___internal___mediaType'
  | 'logo___parent___internal___owner'
  | 'logo___parent___internal___type'
  | 'logo___children'
  | 'logo___children___id'
  | 'logo___children___parent___id'
  | 'logo___children___parent___children'
  | 'logo___children___children'
  | 'logo___children___children___id'
  | 'logo___children___children___children'
  | 'logo___children___internal___content'
  | 'logo___children___internal___contentDigest'
  | 'logo___children___internal___description'
  | 'logo___children___internal___fieldOwners'
  | 'logo___children___internal___ignoreType'
  | 'logo___children___internal___mediaType'
  | 'logo___children___internal___owner'
  | 'logo___children___internal___type'
  | 'logo___internal___content'
  | 'logo___internal___contentDigest'
  | 'logo___internal___description'
  | 'logo___internal___fieldOwners'
  | 'logo___internal___ignoreType'
  | 'logo___internal___mediaType'
  | 'logo___internal___owner'
  | 'logo___internal___type'
  | 'title'
  | 'subtitle'
  | 'startDate'
  | 'endDate'
  | 'description';

export type ExperienceJsonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ExperienceJsonEdge>;
  nodes: Array<ExperienceJson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ExperienceJsonSortInput = {
  fields?: Maybe<Array<Maybe<ExperienceJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type AboutMeJsonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<AboutMeJsonEdge>;
  nodes: Array<AboutMeJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<AboutMeJsonGroupConnection>;
};


export type AboutMeJsonConnectionDistinctArgs = {
  field: AboutMeJsonFieldsEnum;
};


export type AboutMeJsonConnectionMaxArgs = {
  field: AboutMeJsonFieldsEnum;
};


export type AboutMeJsonConnectionMinArgs = {
  field: AboutMeJsonFieldsEnum;
};


export type AboutMeJsonConnectionSumArgs = {
  field: AboutMeJsonFieldsEnum;
};


export type AboutMeJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: AboutMeJsonFieldsEnum;
};

export type AboutMeJsonEdge = {
  next?: Maybe<AboutMeJson>;
  node: AboutMeJson;
  previous?: Maybe<AboutMeJson>;
};

export type AboutMeJsonFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'dataId'
  | 'title'
  | 'description'
  | 'shortDescription'
  | 'urls___gravatar'
  | 'urls___portfolioPdf___sourceInstanceName'
  | 'urls___portfolioPdf___absolutePath'
  | 'urls___portfolioPdf___relativePath'
  | 'urls___portfolioPdf___extension'
  | 'urls___portfolioPdf___size'
  | 'urls___portfolioPdf___prettySize'
  | 'urls___portfolioPdf___modifiedTime'
  | 'urls___portfolioPdf___accessTime'
  | 'urls___portfolioPdf___changeTime'
  | 'urls___portfolioPdf___birthTime'
  | 'urls___portfolioPdf___root'
  | 'urls___portfolioPdf___dir'
  | 'urls___portfolioPdf___base'
  | 'urls___portfolioPdf___ext'
  | 'urls___portfolioPdf___name'
  | 'urls___portfolioPdf___relativeDirectory'
  | 'urls___portfolioPdf___dev'
  | 'urls___portfolioPdf___mode'
  | 'urls___portfolioPdf___nlink'
  | 'urls___portfolioPdf___uid'
  | 'urls___portfolioPdf___gid'
  | 'urls___portfolioPdf___rdev'
  | 'urls___portfolioPdf___ino'
  | 'urls___portfolioPdf___atimeMs'
  | 'urls___portfolioPdf___mtimeMs'
  | 'urls___portfolioPdf___ctimeMs'
  | 'urls___portfolioPdf___atime'
  | 'urls___portfolioPdf___mtime'
  | 'urls___portfolioPdf___ctime'
  | 'urls___portfolioPdf___birthtime'
  | 'urls___portfolioPdf___birthtimeMs'
  | 'urls___portfolioPdf___blksize'
  | 'urls___portfolioPdf___blocks'
  | 'urls___portfolioPdf___publicURL'
  | 'urls___portfolioPdf___childrenSkillsJson'
  | 'urls___portfolioPdf___childrenSkillsJson___id'
  | 'urls___portfolioPdf___childrenSkillsJson___children'
  | 'urls___portfolioPdf___childrenSkillsJson___name'
  | 'urls___portfolioPdf___childrenSkillsJson___shortName'
  | 'urls___portfolioPdf___childrenSkillsJson___type'
  | 'urls___portfolioPdf___childrenSkillsJson___description'
  | 'urls___portfolioPdf___childrenSkillsJson___startDate'
  | 'urls___portfolioPdf___childrenSkillsJson___endDate'
  | 'urls___portfolioPdf___childrenSkillsJson___rating'
  | 'urls___portfolioPdf___childrenSkillsJson___skillLevel'
  | 'urls___portfolioPdf___childrenSkillsJson___link'
  | 'urls___portfolioPdf___childSkillsJson___id'
  | 'urls___portfolioPdf___childSkillsJson___children'
  | 'urls___portfolioPdf___childSkillsJson___name'
  | 'urls___portfolioPdf___childSkillsJson___shortName'
  | 'urls___portfolioPdf___childSkillsJson___type'
  | 'urls___portfolioPdf___childSkillsJson___description'
  | 'urls___portfolioPdf___childSkillsJson___startDate'
  | 'urls___portfolioPdf___childSkillsJson___endDate'
  | 'urls___portfolioPdf___childSkillsJson___rating'
  | 'urls___portfolioPdf___childSkillsJson___skillLevel'
  | 'urls___portfolioPdf___childSkillsJson___link'
  | 'urls___portfolioPdf___childrenShowcasesJson'
  | 'urls___portfolioPdf___childrenShowcasesJson___id'
  | 'urls___portfolioPdf___childrenShowcasesJson___children'
  | 'urls___portfolioPdf___childrenShowcasesJson___title'
  | 'urls___portfolioPdf___childrenShowcasesJson___type'
  | 'urls___portfolioPdf___childrenShowcasesJson___subtitle'
  | 'urls___portfolioPdf___childrenShowcasesJson___authors'
  | 'urls___portfolioPdf___childrenShowcasesJson___tags'
  | 'urls___portfolioPdf___childrenShowcasesJson___description'
  | 'urls___portfolioPdf___childrenShowcasesJson___link'
  | 'urls___portfolioPdf___childrenShowcasesJson___sourceCodeLink'
  | 'urls___portfolioPdf___childShowcasesJson___id'
  | 'urls___portfolioPdf___childShowcasesJson___children'
  | 'urls___portfolioPdf___childShowcasesJson___title'
  | 'urls___portfolioPdf___childShowcasesJson___type'
  | 'urls___portfolioPdf___childShowcasesJson___subtitle'
  | 'urls___portfolioPdf___childShowcasesJson___authors'
  | 'urls___portfolioPdf___childShowcasesJson___tags'
  | 'urls___portfolioPdf___childShowcasesJson___description'
  | 'urls___portfolioPdf___childShowcasesJson___link'
  | 'urls___portfolioPdf___childShowcasesJson___sourceCodeLink'
  | 'urls___portfolioPdf___childrenExperienceJson'
  | 'urls___portfolioPdf___childrenExperienceJson___id'
  | 'urls___portfolioPdf___childrenExperienceJson___children'
  | 'urls___portfolioPdf___childrenExperienceJson___dataId'
  | 'urls___portfolioPdf___childrenExperienceJson___type'
  | 'urls___portfolioPdf___childrenExperienceJson___title'
  | 'urls___portfolioPdf___childrenExperienceJson___subtitle'
  | 'urls___portfolioPdf___childrenExperienceJson___startDate'
  | 'urls___portfolioPdf___childrenExperienceJson___endDate'
  | 'urls___portfolioPdf___childrenExperienceJson___description'
  | 'urls___portfolioPdf___childExperienceJson___id'
  | 'urls___portfolioPdf___childExperienceJson___children'
  | 'urls___portfolioPdf___childExperienceJson___dataId'
  | 'urls___portfolioPdf___childExperienceJson___type'
  | 'urls___portfolioPdf___childExperienceJson___title'
  | 'urls___portfolioPdf___childExperienceJson___subtitle'
  | 'urls___portfolioPdf___childExperienceJson___startDate'
  | 'urls___portfolioPdf___childExperienceJson___endDate'
  | 'urls___portfolioPdf___childExperienceJson___description'
  | 'urls___portfolioPdf___childrenAboutMeJson'
  | 'urls___portfolioPdf___childrenAboutMeJson___id'
  | 'urls___portfolioPdf___childrenAboutMeJson___children'
  | 'urls___portfolioPdf___childrenAboutMeJson___dataId'
  | 'urls___portfolioPdf___childrenAboutMeJson___title'
  | 'urls___portfolioPdf___childrenAboutMeJson___description'
  | 'urls___portfolioPdf___childrenAboutMeJson___shortDescription'
  | 'urls___portfolioPdf___childrenAboutMeJson___downloadResumeLabel'
  | 'urls___portfolioPdf___childrenAboutMeJson___contactLabel'
  | 'urls___portfolioPdf___childAboutMeJson___id'
  | 'urls___portfolioPdf___childAboutMeJson___children'
  | 'urls___portfolioPdf___childAboutMeJson___dataId'
  | 'urls___portfolioPdf___childAboutMeJson___title'
  | 'urls___portfolioPdf___childAboutMeJson___description'
  | 'urls___portfolioPdf___childAboutMeJson___shortDescription'
  | 'urls___portfolioPdf___childAboutMeJson___downloadResumeLabel'
  | 'urls___portfolioPdf___childAboutMeJson___contactLabel'
  | 'urls___portfolioPdf___id'
  | 'urls___portfolioPdf___parent___id'
  | 'urls___portfolioPdf___parent___children'
  | 'urls___portfolioPdf___children'
  | 'urls___portfolioPdf___children___id'
  | 'urls___portfolioPdf___children___children'
  | 'urls___portfolioPdf___internal___content'
  | 'urls___portfolioPdf___internal___contentDigest'
  | 'urls___portfolioPdf___internal___description'
  | 'urls___portfolioPdf___internal___fieldOwners'
  | 'urls___portfolioPdf___internal___ignoreType'
  | 'urls___portfolioPdf___internal___mediaType'
  | 'urls___portfolioPdf___internal___owner'
  | 'urls___portfolioPdf___internal___type'
  | 'contactDetails___label'
  | 'contactDetails___name'
  | 'contactDetails___zip'
  | 'contactDetails___city'
  | 'contactDetails___country'
  | 'contactDetails___email'
  | 'downloadResumeLabel'
  | 'contactLabel';

export type AboutMeJsonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<AboutMeJsonEdge>;
  nodes: Array<AboutMeJson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type AboutMeJsonSortInput = {
  fields?: Maybe<Array<Maybe<AboutMeJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DefaultSeoQueryVariables = Exact<{ [key: string]: never; }>;


export type DefaultSeoQuery = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title' | 'description' | 'author'>> }> };

export type LayoutQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type LayoutQueryQuery = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }> };

export type AboutMeFragmentFragment = { aboutMe: { edges: Array<{ node: (
        Pick<AboutMeJson, 'id' | 'dataId' | 'title' | 'description' | 'shortDescription' | 'downloadResumeLabel' | 'contactLabel'>
        & { urls?: Maybe<(
          Pick<AboutMeJsonUrls, 'gravatar'>
          & { portfolioPdf?: Maybe<{ src: File['publicURL'], label: File['name'] }> }
        )>, contactDetails?: Maybe<Pick<AboutMeJsonContactDetails, 'label' | 'name' | 'zip' | 'city' | 'country' | 'email'>> }
      ) }> } };

export type WorkExperienceFragmentFragment = { workExperience: { edges: Array<{ node: (
        Pick<ExperienceJson, 'id' | 'dataId' | 'type' | 'title' | 'subtitle' | 'startDate' | 'endDate' | 'description'>
        & { logo?: Maybe<Pick<File, 'id' | 'publicURL'>> }
      ) }> } };

export type EducationExperienceFragmentFragment = { educationExperience: { edges: Array<{ node: (
        Pick<ExperienceJson, 'id' | 'dataId' | 'type' | 'title' | 'subtitle' | 'startDate' | 'endDate' | 'description'>
        & { logo?: Maybe<Pick<File, 'id' | 'publicURL'>> }
      ) }> } };

export type ExperienceFragmentFragment = (
  WorkExperienceFragmentFragment
  & EducationExperienceFragmentFragment
);

export type ExperienceFragmentQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ExperienceFragmentQueryQuery = ExperienceFragmentFragment;

export type IndexPageFragmentFragment = (
  AboutMeFragmentFragment
  & ExperienceFragmentFragment
  & SkillsFragmentFragment
  & ShowcasesFragmentFragment
);

export type ShowcasesFragmentFragment = { showcases: { edges: Array<{ node: (
        Pick<ShowcasesJson, 'id' | 'title' | 'subtitle' | 'type' | 'authors' | 'tags' | 'description' | 'link' | 'sourceCodeLink'>
        & { image?: Maybe<Pick<File, 'publicURL'>>, internalLink?: Maybe<Pick<File, 'publicURL' | 'name'>> }
      ) }> } };

export type ShowcasesFragmentQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ShowcasesFragmentQueryQuery = ShowcasesFragmentFragment;

export type SkillsFragmentFragment = { skills: { edges: Array<{ node: (
        Pick<SkillsJson, 'id' | 'name' | 'shortName' | 'type' | 'description' | 'startDate' | 'endDate' | 'rating' | 'skillLevel' | 'link'>
        & { logo?: Maybe<Pick<File, 'publicURL'>> }
      ) }> } };

export type SkillsFragmentQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type SkillsFragmentQueryQuery = SkillsFragmentFragment;

export type IndexPageQueryVariables = Exact<{ [key: string]: never; }>;


export type IndexPageQuery = IndexPageFragmentFragment;
