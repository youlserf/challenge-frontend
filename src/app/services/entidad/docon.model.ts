export interface TipoContribuyente {
  idTipoContribuyente: number;
  nombre: string;
  estado: boolean;
}

export interface TipoDocumento {
  idTipoDocumento: number;
  codigo: string;
  nombre: string;
  descripcion: string;
  estado: boolean;
}

export interface DataModel {
  tipoContribuyentes: TipoContribuyente[];
  tipoDocumentos: TipoDocumento[];
}
