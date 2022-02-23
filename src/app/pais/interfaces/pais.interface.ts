export interface Country {
	name: Name;
	tld: string[];
	cca2: string;
	ccn3: string;
	cca3: string;
	cioc?: string;
	independent: boolean;
	status: Status;
	unMember: boolean;
	currencies?: Currencies;
	idd: Idd;
	capital?: string[];
	altSpellings: string[];
	region: Region;
	subregion?: string;
	languages?: { [key: string]: string };
	translations: { [key: string]: Translation };
	latlng: number[];
	landlocked: boolean;
	borders?: string[];
	area: number;
	demonyms?: Demonyms;
	flag?: string;
	maps: Maps;
	population: number;
	gini?: { [key: string]: number };
	fifa?: string;
	car: Car;
	timezones: string[];
	continents: Continent[];
	flags: CoatOfArms;
	coatOfArms: CoatOfArms;
	startOfWeek: StartOfWeek;
	capitalInfo: CapitalInfo;
	postalCode?: PostalCode;
}

export interface CapitalInfo {
	latlng?: number[];
}

export interface Car {
	signs?: string[];
	side: Side;
}

export enum Side {
	Left = 'left',
	Right = 'right',
}

export interface CoatOfArms {
	png?: string;
	svg?: string;
}

export enum Continent {
	Africa = 'Africa',
	Antarctica = 'Antarctica',
	Asia = 'Asia',
	Europe = 'Europe',
	NorthAmerica = 'North America',
	Oceania = 'Oceania',
	SouthAmerica = 'South America',
}

export interface Currencies {
	EUR?: Aed;
	CUC?: Aed;
	CUP?: Aed;
	VES?: Aed;
	WST?: Aed;
	KHR?: Aed;
	USD?: Aed;
	MRU?: Aed;
	YER?: Aed;
	DJF?: Aed;
	EGP?: Aed;
	HRK?: Aed;
	CHF?: Aed;
	KZT?: Aed;
	DKK?: Aed;
	BMD?: Aed;
	SHP?: Aed;
	ZAR?: Aed;
	RWF?: Aed;
	MOP?: Aed;
	BIF?: Aed;
	UAH?: Aed;
	XOF?: Aed;
	TWD?: Aed;
	CKD?: Aed;
	NZD?: Aed;
	ANG?: Aed;
	ISK?: Aed;
	PYG?: Aed;
	SZL?: Aed;
	MDL?: Aed;
	CLP?: Aed;
	AUD?: Aed;
	UYU?: Aed;
	LKR?: Aed;
	ILS?: Aed;
	MZN?: Aed;
	BTN?: Aed;
	INR?: Aed;
	KPW?: Aed;
	BHD?: Aed;
	FOK?: Aed;
	AWG?: Aed;
	IQD?: Aed;
	MAD?: Aed;
	MKD?: Aed;
	PLN?: Aed;
	BRL?: Aed;
	OMR?: Aed;
	THB?: Aed;
	XAF?: Aed;
	AMD?: Aed;
	HNL?: Aed;
	ZMW?: Aed;
	NOK?: Aed;
	COP?: Aed;
	LYD?: Aed;
	RSD?: Aed;
	SEK?: Aed;
	AOA?: Aed;
	PAB?: Aed;
	MUR?: Aed;
	TZS?: Aed;
	GEL?: Aed;
	GMD?: Aed;
	ZWL?: Aed;
	XCD?: Aed;
	BYN?: Aed;
	CAD?: Aed;
	ARS?: Aed;
	SRD?: Aed;
	GNF?: Aed;
	NAD?: Aed;
	QAR?: Aed;
	MMK?: Aed;
	FKP?: Aed;
	STN?: Aed;
	CDF?: Aed;
	PHP?: Aed;
	BND?: Aed;
	SGD?: Aed;
	SLL?: Aed;
	DZD?: Aed;
	SDG?: BAM;
	ETB?: Aed;
	BAM?: BAM;
	KMF?: Aed;
	KWD?: Aed;
	XPF?: Aed;
	BDT?: Aed;
	GBP?: Aed;
	MGA?: Aed;
	RUB?: Aed;
	VND?: Aed;
	NPR?: Aed;
	KID?: Aed;
	LRD?: Aed;
	SOS?: Aed;
	RON?: Aed;
	TND?: Aed;
	AZN?: Aed;
	PGK?: Aed;
	LSL?: Aed;
	BSD?: Aed;
	CNY?: Aed;
	AED?: Aed;
	LAK?: Aed;
	JOD?: Aed;
	UZS?: Aed;
	NIO?: Aed;
	KES?: Aed;
	JEP?: Aed;
	CZK?: Aed;
	UGX?: Aed;
	CRC?: Aed;
	MXN?: Aed;
	ERN?: Aed;
	VUV?: Aed;
	BWP?: Aed;
	FJD?: Aed;
	ALL?: Aed;
	PEN?: Aed;
	IDR?: Aed;
	GGP?: Aed;
	KGS?: Aed;
	BOB?: Aed;
	LBP?: Aed;
	MVR?: Aed;
	KRW?: Aed;
	SYP?: Aed;
	AFN?: Aed;
	MWK?: Aed;
	TJS?: Aed;
	NGN?: Aed;
	PKR?: Aed;
	IRR?: Aed;
	CVE?: Aed;
	BGN?: Aed;
	HTG?: Aed;
	IMP?: Aed;
	GYD?: Aed;
	SAR?: Aed;
	TTD?: Aed;
}

export interface Aed {
	name: string;
	symbol: string;
}

export interface BAM {
	name: string;
}

export interface Demonyms {
	eng: Eng;
	fra?: Eng;
}

export interface Eng {
	f: string;
	m: string;
}

export interface Idd {
	root?: string;
	suffixes?: string[];
}

export interface Maps {
	googleMaps: string;
	openStreetMaps: string;
}

export interface Name {
	common: string;
	official: string;
	nativeName?: { [key: string]: Translation };
}

export interface Translation {
	official: string;
	common: string;
}

export interface PostalCode {
	format: string;
	regex?: string;
}

export enum Region {
	Africa = 'Africa',
	Americas = 'Americas',
	Antarctic = 'Antarctic',
	Asia = 'Asia',
	Europe = 'Europe',
	Oceania = 'Oceania',
}

export enum StartOfWeek {
	Monday = 'monday',
	Sunday = 'sunday',
	Turday = 'turday',
}

export enum Status {
	OfficiallyAssigned = 'officially-assigned',
}
