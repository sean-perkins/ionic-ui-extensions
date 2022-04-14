import { Component, ComponentInterface, Event, EventEmitter, h, Host, Prop, Watch } from '@stencil/core';

import { defineCustomElement as defineIonButtonCustomElement } from '@ionic/core/components/ion-button.js';
import { d as defineIonIconCustomElement } from '@ionic/core/components/icon.js';
import { PaginationBarChangeEventDetail } from './pagination-bar-interface';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

@Component({
  tag: 'ion-x-pagination-bar',
  styleUrl: 'pagination-bar.scss',
  shadow: true,
})
export class PaginationBar implements ComponentInterface {
  private pageNeighbors: number;
  private totalPages: number;

  /**
   * The number of results that are show per page.
   */
  @Prop({ mutable: true }) size: number;
  /**
   * The total elements that are available to be paginated.
   */
  @Prop({ mutable: true }) totalElements: number;
  /**
   * The maximum number of page number buttons that can display alongside your current page.
   */
  @Prop({ mutable: true }) maximumNeighbors = 1;
  /**
   * The active page index (zero-based) of the paginated data set.
   */
  @Prop({ mutable: true }) page = 0;

  @Prop() collapse = false;

  @Prop() fill: 'solid' | 'clear' = 'clear';

  /**
   * Emitted when the selected page value changes.
   */
  @Event() ionChange: EventEmitter<PaginationBarChangeEventDetail>;

  @Watch('totalElements')
  totalChanged() {
    this.setTotalPages();
  }

  @Watch('size')
  sizeChanged() {
    this.calculatePageSteps();
  }

  connectedCallback() {
    defineIonButtonCustomElement();
    defineIonIconCustomElement();
  }

  componentWillLoad() {
    this.calculatePageSteps();
  }

  onPageLeft = () => {
    this.gotoPage(this.page - this.pageNeighbors * 2 - 1);
  };

  onPagePrevious = () => {
    const { page } = this;
    if (page === 0) {
      return;
    }
    this.gotoPage(page);
  };

  onPageRight = () => {
    this.gotoPage(this.page + this.pageNeighbors * 2 + 1);
  };

  onPageNext = () => {
    const { page, totalPages } = this;
    if (page + 1 === totalPages) {
      return;
    }
    this.gotoPage(page + 2);
  };

  onPageClick = page => _ev => {
    this.gotoPage(page);
  };

  private calculatePageSteps() {
    const { maximumNeighbors } = this;
    this.pageNeighbors = typeof maximumNeighbors === 'number' ? Math.max(0, Math.min(maximumNeighbors, 2)) : 0;
    this.setTotalPages();
  }

  private setTotalPages() {
    this.totalPages = Math.ceil(this.totalElements / this.size);
    if (this.page > this.totalPages) {
      this.gotoPage(this.totalPages);
    }
  }

  private range(from: number, to: number, step = 1) {
    let i = from;
    const range = [];

    while (i <= to) {
      range.push(i);
      i += step;
    }

    return range;
  }

  private fetchPageNumbers = () => {
    // The total page numbers to show on the control
    const totalNumbers = this.pageNeighbors * 2 + 3;
    // totalNumbers + 2 to cover for the left(<) and right(>) controls
    const totalBlocks = totalNumbers + 2;

    const currentPage = this.page + 1;

    if (this.totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - this.pageNeighbors);
      const endPage = Math.min(this.totalPages - 1, currentPage + this.pageNeighbors);

      let pages = this.range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = this.totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (10)
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = this.range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        // handle: (1) {2 3} [4] {5 6} > (10)
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = this.range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }

        // handle: (1) < {4 5} [6] {7 8} > (10)
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }

      return [1, ...pages, this.totalPages];
    }
    return this.range(1, this.totalPages);
  };

  private gotoPage(page: number) {
    const currentPage = Math.max(0, Math.min(page - 1, this.totalPages));

    const eventDetail: PaginationBarChangeEventDetail = {
      page: currentPage,
      totalPages: this.totalPages,
      totalRecords: this.totalElements,
    };

    this.page = currentPage;
    this.ionChange.emit(eventDetail);
  }

  render() {
    const { totalElements, page, totalPages, collapse, fill } = this;
    if (!totalElements || totalElements === 0) {
      return null;
    }
    const currentPage = page + 1;
    const pages = this.fetchPageNumbers();
    return (
      <Host
        class={{
          'pagination__bar--collapsed': collapse,
        }}
      >
        <nav class="pagination__nav" aria-label="Pagination">
          <ul class="pagination">
            {pages.length > 0 ? (
              <li class="prev-btn">
                <ion-button
                  class={{
                    'pagination__button': true,
                    'pagination__button--collapsed': collapse,
                  }}
                  fill={fill}
                  disabled={currentPage === 1}
                  onClick={this.onPagePrevious}
                >
                  <slot name="prev-button">
                    <ion-icon class="pagination__button-icon" icon="chevron-back-outline"></ion-icon>
                  </slot>
                </ion-button>
              </li>
            ) : null}
            {!collapse &&
              pages.map((page, index) => {
                if (page === LEFT_PAGE) {
                  return (
                    <li key={index} class="pagination__item">
                      <ion-button class="pagination__button" fill={fill} aria-label="Previous" tabIndex={-1} onClick={this.onPageLeft}>
                        ...
                      </ion-button>
                    </li>
                  );
                }

                if (page === RIGHT_PAGE) {
                  return (
                    <li key={index} class="pagination__item">
                      <ion-button class="pagination__button" fill={fill} aria-label="Next" tabIndex={-1} onClick={this.onPageRight}>
                        ...
                      </ion-button>
                    </li>
                  );
                }

                return (
                  <li class="page-btn" key={index}>
                    <ion-button
                      class={{
                        pagination__button: true,
                        active: currentPage === page,
                      }}
                      fill="clear"
                      disabled={currentPage === page}
                      onClick={this.onPageClick(page)}
                    >
                      {page}
                    </ion-button>
                  </li>
                );
              })}
            {pages.length > 0 ? (
              <li class="next-btn">
                <ion-button
                  class={{
                    'pagination__button': true,
                    'pagination__button--collapsed': collapse,
                  }}
                  fill={fill}
                  disabled={currentPage === totalPages}
                  onClick={this.onPageNext}
                >
                  <slot name="next-button">
                    <ion-icon class="pagination__button-icon" icon="chevron-forward-outline"></ion-icon>
                  </slot>
                </ion-button>
              </li>
            ) : null}
          </ul>
        </nav>
      </Host>
    );
  }
}
