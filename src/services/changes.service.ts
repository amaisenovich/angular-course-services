import { Injectable } from "@angular/core"
import { ProvidedIn } from "src/enums/providedIn.enum"

@Injectable({
  providedIn: ProvidedIn.ROOT
})
export class ChangesService {
  change = 0

  log = (entity: any) => {
    console.log('Entity updated:', entity, '. Total number of changes: ', ++this.change)
  }
}
