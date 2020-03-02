import { Evento } from '../evento/evento';
import { Azienda } from '../azienda/azienda';
import { Badge } from '../badge/badge';
import { EventoUtente } from './eventoutente';
import { AziendaUtente } from './aziendautente';
import { VinoUtente } from './vinoutente';
import { BadgeUtente } from './badgeutente';
import { UtenteUtente } from './utenteutente';

export class Utente {
  public idUtente: string;
  public nomeUtente: string;
  public cognomeUtente: string;
  public creditiUtente: number;
  public esperienzaUtente: number;
  public livelloUtente: string;
  public biografiaUtente: string;
  public cittaUtente: string;
  public usernameUtente: string;
  public urlFotoUtente: string;
  public emailUtente: string;
  public professioneUtente: string;
  public numTotEventi: number;
  public numTotAziende: number;
  public numTotBadge: number;
  public condivisioneBadge: string;
  public condivisioneEventi: string;
  public condivisioneVini: string;
  public statoUtente: string;
  public ruoloUtente: string;
  public idProfiloAziendaUtente: string;
  public eventiUtente: Array<Evento>;
  public aziendeUtente: Array<Azienda>;
  public badgeUtente: Array<Badge>;
  public utentiUtente: Array<Utente>;
  public eventiUtenteInt: Array<EventoUtente>;
  public acquistatiEventiUtenteInt: Array<EventoUtente>;
  public aziendeUtenteInt: Array<AziendaUtente>;
  public viniUtenteInt: Array<VinoUtente>;
  public badgeUtenteInt: Array<BadgeUtente>;
  public utentiUtenteInt: Array<UtenteUtente>;
}
