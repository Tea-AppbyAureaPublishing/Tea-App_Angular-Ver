import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
  private selectedBenefits = new Set<string>();
  private selectedTastings = new Set<string>();

  isBenefitSelected(benefit: string): boolean {
    return this.selectedBenefits.has(benefit);
  }

  isTastingSelected(tasting: string): boolean {
    return this.selectedTastings.has(tasting);
  }

  toggleBenefit(benefit: string): void {
    const updated = new Set(this.selectedBenefits);

    if (updated.has(benefit)) {
      updated.delete(benefit);
    } else {
      updated.add(benefit);
    }

    this.selectedBenefits = updated;
  }

  toggleTasting(tasting: string): void {
    const updated = new Set(this.selectedTastings);

    if (updated.has(tasting)) {
      updated.delete(tasting);
    } else {
      updated.add(tasting);
    }

    this.selectedTastings = updated;
  }
}
