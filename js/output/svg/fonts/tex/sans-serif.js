"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FontData_js_1 = require("../../FontData.js");
var sans_serif_js_1 = require("../../../common/fonts/tex/sans-serif.js");
exports.sansSerif = FontData_js_1.AddPaths(sans_serif_js_1.sansSerif, {
    0x20: '',
    0x21: '120 187Q120 225 115 440T110 693Q110 694 159 694T208 693Q208 655 203 440T198 187Q198 186 159 186T120 187ZM110 0V98H208V0H110',
    0x22: '33 596V694H131V597L82 471H32L47 532Q62 593 63 594Q63 596 48 596H33ZM227 596V694H325V597L276 471H226L241 532Q256 593 257 594Q257 596 242 596H227',
    0x23: '56 350Q56 363 70 370H192Q314 370 314 371L356 526Q396 676 401 685Q406 694 416 694Q423 694 429 689T436 677Q436 673 396 523T355 371Q355 370 449 370Q544 370 544 371L586 526Q628 682 630 685Q636 694 646 694Q653 694 659 689T665 678Q665 670 645 593T605 444L585 371Q585 370 673 370H762Q777 362 777 350Q777 337 767 334T723 330H668H573L567 305Q560 282 545 226L530 171L646 170H721Q756 170 766 167T777 150Q777 138 762 130H640Q518 130 518 129L476 -26Q434 -182 432 -185Q426 -194 416 -194Q409 -194 403 -189T397 -178Q397 -170 417 -93T457 56L477 129Q477 130 383 130Q288 130 288 129L246 -26Q204 -182 202 -185Q196 -194 186 -194Q179 -194 173 -189T167 -178Q167 -170 187 -94T227 56L247 129Q247 130 159 130H70Q56 137 56 150Q56 165 72 170H259L265 195Q273 222 287 275L302 330H186L70 331Q63 334 58 339Q56 343 56 350ZM489 170L532 330H343L337 305Q330 282 315 226L300 171L394 170H489',
    0x24: '55 509Q55 585 103 638T213 701V750H286V703H289Q312 703 354 689Q372 682 399 666T427 646L413 569Q413 568 403 575Q352 615 291 624H286V405Q357 389 400 331T444 199Q444 128 402 69T286 -7V-56H213V-9Q167 -3 125 14T63 44T44 60Q44 61 52 101L59 140L69 132Q78 125 87 119T107 107T124 97T141 90T157 84T173 80T187 76T201 73T213 70V317L202 319Q141 335 98 386T55 509ZM213 424V620L203 615Q143 587 143 522Q143 455 213 424ZM356 187Q356 208 350 227T334 258T315 280T298 293T287 297Q286 297 286 186V75Q356 110 356 187',
    0x25: '56 549Q56 639 98 694T195 750Q248 750 290 694T332 548Q332 455 290 401T195 347Q141 347 99 403T56 549ZM248 549Q248 602 234 638T195 674Q145 674 145 549Q145 423 195 423Q219 423 233 459T248 549ZM197 -56Q187 -56 182 -49T176 -35Q176 -33 178 -27Q179 -25 399 356T623 741Q626 750 639 750Q648 750 654 744T659 729Q657 721 435 336T207 -52Q203 -56 197 -56ZM500 146Q500 235 542 291T639 347Q692 347 734 293T776 146Q776 53 733 -1T639 -56Q587 -56 544 -2T500 146ZM692 146Q692 199 678 235T639 271Q589 271 589 146Q589 20 639 20Q663 20 677 56T692 146',
    0x26: '156 502Q156 600 198 658T302 716Q367 716 405 665T444 549Q444 531 442 523Q426 446 304 348L287 334Q305 297 340 249T402 170T430 139T443 149T472 181T509 231T549 303T583 394Q584 398 586 404Q587 408 587 409Q588 409 626 399T665 388Q663 381 660 369T644 322T614 253T567 176T502 98L491 87Q534 57 584 57Q653 57 700 75Q702 75 702 34T700 -7Q652 -22 586 -22H580Q505 -22 434 26L421 34Q419 33 405 25T374 11T336 -4T285 -17T226 -22Q143 -22 93 31T42 152Q42 184 51 211T81 260T111 291T144 317L184 348L178 365Q156 430 156 502ZM359 552Q359 588 345 614T302 640Q292 640 282 636T260 622T241 590T233 535Q236 474 253 417L257 407L271 419Q312 454 330 479Q359 514 359 552ZM345 102Q262 190 216 277Q215 277 204 267T180 247T165 236Q135 208 135 159Q135 123 152 97T198 61Q207 58 227 58Q286 58 357 89L345 102',
    0x27: '90 596V694H188V597L139 471H89L104 532Q119 593 120 594Q120 596 105 596H90',
    0x28: '74 250Q74 564 240 733L257 750H333L323 739Q167 573 167 250T323 -239L333 -250H257L240 -233Q74 -63 74 250',
    0x29: '221 -73T221 250T65 739L55 750H131L148 733Q314 567 314 250T148 -233L131 -250H55L65 -239Q221 -73 221 250',
    0x2A: '208 717Q211 731 222 740T250 750Q265 750 277 741T291 717Q291 706 290 675T286 617L285 591L329 622Q369 651 376 655T393 659Q411 659 423 647T436 616Q436 609 434 603T429 594T419 585T407 577T389 567T368 556L316 528L368 500Q421 472 429 464Q436 455 436 440Q436 422 423 409T393 396Q390 396 388 396T384 397T380 398T375 401T367 406T358 413T346 422T329 434L285 465Q284 465 285 438T289 381T291 347Q291 327 278 317T250 306Q234 306 222 315T208 339Q208 350 209 381T212 439L214 465L170 434Q130 405 123 401T106 397Q88 397 76 409T63 440Q63 447 65 453T70 462T80 471T92 479T110 489T131 500L183 528L131 556Q78 584 70 592Q63 601 63 616Q63 634 76 647T106 660Q109 660 111 660T115 659T119 658T124 655T132 650T141 643T153 634T170 622L214 591L212 617Q211 643 210 674T208 717',
    0x2B: '56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250',
    0x2C: '90 0V98H188V1L139 -125H89L104 -64Q119 -3 120 -2Q120 0 105 0H90',
    0x2D: '11 186V259H277V186H11',
    0x2E: '90 0V98H188V0H90',
    0x2F: '423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750',
    0x30: '117 621Q174 678 247 678Q305 678 351 647Q396 617 424 557Q460 472 460 328Q460 271 455 224Q448 154 427 104T376 27T314 -10T249 -22Q201 -22 160 1T91 67Q39 154 39 316Q39 541 117 621ZM250 55Q274 55 293 66T324 93T344 136T357 185T364 240T366 291T367 340Q367 373 367 393T363 449T352 507T332 553T299 589T250 601Q217 601 194 584T159 542T141 479T133 411T132 340V331Q132 299 133 277T137 219T147 157T167 107T201 68T250 55',
    0x31: '94 612Q172 616 211 632T284 678H307V73H430V0H88V73H213V317Q213 560 212 560Q210 558 197 554T155 546T96 540L83 539V612H94',
    0x32: '222 599Q190 599 166 585T128 550T108 509T97 474T93 459L67 492L42 526L47 539Q72 608 120 642T225 677Q304 677 355 644Q449 579 449 454Q449 373 361 290Q351 280 315 250T199 144Q156 103 137 85L293 86H449V0H50V79L216 242Q284 302 317 349T351 456Q351 517 315 558T222 599',
    0x33: '333 521Q333 554 313 579T243 604Q154 604 99 514L78 546Q56 577 56 579Q56 580 62 589T82 611T114 637T162 662T222 677Q224 677 231 677T242 678H245Q318 678 374 634T430 520Q430 483 417 452T382 398T351 369T329 354L328 353Q369 333 373 330Q408 306 432 268T457 184Q457 103 397 41T242 -22Q131 -22 51 58L42 68L49 105L55 142L58 138Q62 134 66 130T77 120T91 108T108 96T129 83T152 72T179 63T209 57T242 54Q285 54 319 86T353 184Q353 231 331 267T260 315L213 316H166V354Q166 392 167 392Q233 395 257 405Q290 418 311 450T333 521',
    0x34: '271 654L272 656H380V235H471V159H380V0H286V159H28V235L149 443Q269 652 271 654ZM292 235V607Q292 604 290 591T286 571T280 548T269 517T252 476T226 422T189 354T140 267Q136 260 132 253T126 240L123 236Q123 235 207 235H292',
    0x35: '257 350Q236 350 218 342T189 323T171 301T160 281L157 273Q157 272 116 272H75V656H416V577H162V486Q162 396 163 396T174 403T207 418T258 426Q339 426 394 360T449 203Q449 113 386 46T226 -21H223Q188 -21 156 -11T102 13T64 42T41 66T33 77Q34 78 44 95T64 128L73 144Q93 112 117 93Q165 54 223 54Q270 54 306 86T345 197Q345 350 257 350',
    0x36: '42 318Q42 396 61 460T109 564T173 629T237 666T289 677H301H317Q359 677 408 658V621Q408 585 407 585H406Q359 605 308 605Q246 605 203 556T146 421Q143 403 144 403Q145 402 152 409Q216 469 299 469Q333 469 357 457T407 405Q457 330 457 226Q457 126 402 57Q340 -22 251 -22Q216 -22 183 -7T116 43T63 149T42 318ZM260 393Q216 393 188 365T150 306T141 243Q141 153 172 104Q192 68 230 56Q238 54 251 54Q311 54 342 116Q360 152 360 226Q360 297 344 332Q320 382 277 392Q275 392 270 392T260 393',
    0x37: '42 570V656H457V577L447 564Q345 439 295 289T244 0V-11H145V12Q160 330 356 550Q360 556 365 561T374 571L208 570H42',
    0x38: '55 500Q55 568 109 623T250 678Q327 678 385 627T444 501Q444 445 410 410T336 357L329 353H330Q378 335 417 293T456 184Q456 93 393 36T249 -22T106 35T43 184Q43 251 82 293T169 353Q171 354 166 356Q165 356 163 357Q113 378 84 416T55 500ZM358 496Q358 557 325 581T250 605Q206 605 174 580T141 496Q141 446 171 420T250 393Q298 393 328 419T358 496ZM245 316Q205 316 172 285T139 185V179Q139 79 222 57Q231 55 250 55H254Q295 55 327 84Q360 120 360 188Q360 254 326 285Q295 316 245 316',
    0x39: '44 476Q57 561 116 619T245 677H255Q308 677 349 647Q392 619 424 545T457 334Q457 178 382 78T205 -22Q168 -22 135 -10T86 14L72 25Q73 25 91 58L110 91Q127 78 136 72T163 60T203 54Q238 54 265 71T308 110T335 164T350 214T357 253V257L347 248Q284 187 200 187Q165 187 140 201T87 258Q42 332 42 430Q42 458 44 476ZM269 604Q265 605 254 605Q222 605 199 591T164 554T148 517T141 487Q140 478 140 430T141 373Q146 335 164 307T207 269Q223 263 247 263Q299 266 328 308T358 417Q358 435 356 456T346 511T318 570T269 604',
    0x3A: '90 346V444H188V346H90ZM90 0V98H188V0H90',
    0x3B: '90 346V444H188V346H90ZM90 0V98H188V1L139 -125H89L104 -64Q119 -3 120 -2Q120 0 105 0H90',
    0x3D: '56 350Q56 363 70 370H707Q722 362 722 350Q722 339 708 331L390 330H72Q56 335 56 350ZM56 150Q56 165 72 170H708Q722 160 722 150Q722 138 707 130H70Q56 137 56 150',
    0x3F: '55 652Q63 658 77 666T132 689T214 704T265 703Q303 698 332 684T376 653T401 615T413 578T416 546Q416 475 360 426Q325 396 303 365T273 303T263 256T261 216V186H183V225Q184 281 194 322Q206 368 232 409T276 469T306 495Q323 517 323 550Q323 596 297 612T223 629Q187 629 157 618Q122 607 91 583L83 576L55 652ZM173 0V98H271V0H173',
    0x40: '422 576Q440 576 456 573T480 566L488 563Q488 565 484 571T472 588T452 607T424 622T387 629Q294 629 220 550T146 347Q146 233 210 155T365 66Q376 65 400 65Q465 68 517 86L532 91H612L598 76Q511 -11 388 -11Q250 -11 153 93T56 347Q56 454 107 538T231 663T378 704Q446 704 492 680T564 608T599 506T611 376Q611 320 607 299Q595 227 546 173T422 118Q343 118 288 185T232 347Q232 444 287 510T422 576ZM520 347Q520 429 487 465T421 501Q385 501 354 461T323 347Q323 270 355 232T422 193Q454 193 487 229T520 347',
    0x41: '183 181Q183 179 152 91T118 0H28L154 346L280 693Q281 694 333 694H385L511 349Q636 4 638 2Q638 0 584 0H530L464 183H184L183 181ZM324 606Q319 578 292 492T238 332T210 256Q210 254 324 254T438 255L429 281L419 308Q409 336 395 378T365 465T339 551T324 611V606',
    0x42: '425 363Q438 363 465 353T526 324T585 270T610 192Q610 132 561 78T426 7Q404 2 387 2T240 0H90V694H227Q373 693 396 689Q484 673 533 623T583 517Q583 494 574 473T551 437T520 409T487 388T456 374T433 366L425 363ZM490 516Q490 527 485 539T467 568T423 599T347 621Q340 622 262 623H188V399H261H286Q432 399 478 475Q490 496 490 516ZM514 190Q514 245 462 280T343 322Q336 323 259 323H188V71H274Q365 72 388 77Q445 88 479 121T514 190',
    0x43: '59 347Q59 440 100 521T218 654T392 705Q473 705 550 680Q577 670 577 667Q576 666 572 642T564 595T559 571Q515 601 479 613T392 626Q300 626 232 549T164 347Q164 231 229 150T397 68Q453 68 489 80T568 120L581 129L582 110Q584 91 585 71T587 46Q580 40 566 31T502 5T396 -11Q296 -11 218 41T99 174T59 347',
    0x44: '88 0V694H237H258H316Q383 694 425 686T511 648Q578 604 622 525T666 343Q666 190 564 86Q494 18 400 3Q387 1 237 0H88ZM565 341Q565 409 546 463T495 550T429 600T359 621Q348 623 267 623H189V71H267Q272 71 286 71T310 70Q461 70 527 184Q565 251 565 341',
    0x45: '86 0V691H541V611H366L190 612V397H513V321H190V85H372L554 86V0H86',
    0x46: '86 0V691H526V611H358L190 612V384H485V308H190V0H86',
    0x47: '59 346Q59 499 157 601T384 704Q436 704 466 700T541 679Q551 674 560 670T575 664T583 660T588 658T590 656Q590 652 582 605T573 557L564 564Q489 626 392 626Q301 626 233 549T164 347T233 145T392 68Q441 68 506 84V223H388V299H599V38L588 33Q494 -11 393 -11Q296 -11 219 40T100 172T59 346',
    0x48: '86 0V694H190V399H517V694H621V0H517V323H190V0H86',
    0x49: '87 0V694H191V0H87',
    0x4A: '181 53Q200 53 215 56T241 66T259 79T272 95T280 109T285 122L287 129V694H388V415V229Q388 135 385 112T369 63Q364 51 355 39T328 12T280 -12T212 -22Q172 -22 130 -12T66 8T43 20L46 42Q50 65 54 88L58 110Q58 111 65 104Q107 53 181 53',
    0x4B: '88 0V694H188V519L189 343L525 694H638L375 419L651 0H541L309 351L188 225V0H88',
    0x4C: '87 0V694H191V79L297 80H451L499 81V0H87',
    0x4D: '92 0V694H228L233 680Q236 675 284 547T382 275T436 106Q446 149 497 292T594 558L640 680L645 694H782V0H689V305L688 606Q688 577 500 78L479 23H392L364 96Q364 97 342 156T296 280T246 418T203 544T186 609V588Q185 568 185 517T185 427T185 305V0H92',
    0x4E: '88 0V694H235L252 659Q261 639 364 428T526 84V694H619V0H472L455 35Q453 39 330 294T185 601L181 611V0H88',
    0x4F: '55 345Q55 504 149 609T361 715Q386 715 406 713Q521 696 600 592T680 344Q680 193 590 86T368 -22Q239 -22 147 84T55 345ZM276 59T368 59T518 146T576 360Q576 473 525 545T401 634Q371 637 362 637Q284 637 222 562T159 360T217 147',
    0x50: '88 0V694H230Q347 693 370 692T410 686Q487 667 535 611T583 485Q583 409 527 348T379 276Q369 274 279 274H192V0H88ZM486 485Q486 523 471 551T432 593T391 612T357 621Q350 622 268 623H189V347H268Q350 348 357 349Q370 351 383 354T416 368T450 391T475 429T486 485',
    0x51: '55 345Q55 504 149 609T361 715Q386 715 406 713Q521 696 600 592T680 344Q680 284 665 231T629 143T587 85T551 48L536 35L648 -120L652 -125H531L452 -8L440 -12Q407 -22 369 -22Q239 -22 147 85T55 345ZM579 345Q579 473 517 555T369 637Q279 637 218 554T156 345Q156 223 215 141T368 58Q376 58 382 58T392 58T397 59T401 60T403 61H404Q404 63 360 128T315 194H421L453 150Q485 105 486 105Q490 108 496 113T517 138T545 182T567 247T579 334V345',
    0x52: '88 0V694H227H259H302Q365 694 399 689T474 663Q528 637 558 595T589 504Q589 482 584 462T569 426T547 396T522 372T495 353T470 338T449 328T434 322L429 320L440 300Q452 280 477 238T523 160L617 1L565 0Q513 0 512 1Q512 2 424 156L337 309H189V0H88ZM492 504Q492 600 367 620Q354 622 271 623H189V385H271Q363 386 388 392Q432 402 462 430T492 504',
    0x53: '55 514Q55 589 115 652T283 716Q315 716 345 711T396 699T432 685T457 672T467 667Q467 666 459 618T449 568Q383 634 282 634Q214 634 182 600T150 525Q150 507 155 492T172 465T194 446T222 432T247 423T272 416T289 412Q353 396 378 384Q432 358 466 307T500 194Q500 110 438 44T272 -22Q215 -22 159 -5T73 28T44 50Q45 51 49 75T57 122T62 146L65 143Q68 140 74 136T88 125T107 111T131 98T160 85T194 74T232 66T274 63H286Q327 63 366 96T406 182Q406 245 352 280Q329 296 265 310T173 339Q124 363 90 409T55 514',
    0x54: '36 608V688H644V608H518L392 609V0H288V609L162 608H36',
    0x55: '87 450V694H191V449Q192 203 193 194Q200 148 220 117T266 72T311 54T347 49Q404 49 446 84T501 178Q505 195 505 218T507 449V694H600V450Q600 414 600 356Q599 198 595 181Q594 178 594 177Q575 89 505 34T345 -22Q258 -22 184 34T89 196Q88 205 87 450',
    0x56: '14 692Q14 694 68 694H122L146 633Q325 165 339 90Q340 87 341 87Q341 124 530 619L558 694H605Q652 694 652 692Q650 690 523 354T390 10L387 0H279L276 10Q271 18 144 354T14 692',
    0x57: '115 694Q115 693 156 550T233 266T270 90L271 85Q272 86 272 92Q272 153 405 616L427 694H524L553 590Q672 174 681 95L682 84L684 95Q689 138 728 287T803 563T841 692Q841 694 885 694T929 693Q929 691 829 346L730 0H679L628 1L606 75Q478 524 470 600L469 611L467 600Q458 518 338 101L310 0H213L114 346Q14 691 14 693Q14 694 64 694H115',
    0x58: '14 0Q16 5 144 184T275 367L153 528Q121 571 88 615T42 674T28 694H150L228 584Q315 463 316 461L326 448L497 694H610L609 692Q606 689 492 528Q440 454 409 410T378 366Q378 365 515 182L652 0H531L326 292Q326 293 299 254T226 146L128 0H14',
    0x59: '4 693L64 694H125L174 621Q335 378 340 364L341 362Q361 398 395 450L558 694H663L383 277V0H282V278L143 485Q112 531 75 586T21 668L4 693',
    0x5A: '69 617V694H555V643L373 362Q190 81 190 79H234Q244 79 272 79T344 80T419 81H560V0H55V53L237 334Q420 615 420 617Q413 618 387 618Q380 618 334 618T245 617H69',
    0x5B: '94 -250V750H266V674H181V-174H266V-250H94',
    0x5D: '22 674V750H194V-250H22V-174H107V674H22',
    0x5E: '146 612L212 694H287L353 612Q417 532 420 529Q421 528 418 527Q414 527 383 527H345L250 639Q244 633 199 580L154 527H116Q79 528 79 529Q82 532 146 612',
    0x5F: '0 -114V-38H499V-114H0',
    0x61: '236 387Q209 387 184 382T141 370T111 355T91 342T83 337L82 355Q80 373 79 393T77 417Q77 419 81 421Q86 423 91 426Q155 460 227 460H238Q319 460 368 400Q393 371 400 341T408 252Q408 240 408 207T407 152V0H317V39L306 32Q244 -10 159 -10H152Q109 -10 77 22Q38 61 38 126Q38 142 39 146Q55 199 130 223T295 252H314V277Q314 305 313 310Q308 342 287 364T236 387ZM303 186Q124 180 124 126Q124 105 144 86T208 66Q284 66 309 124Q314 137 314 166V186H303',
    0x62: '303 -11Q280 -11 259 -6T222 6T194 21T176 33T168 38V0H75V694H165V550L166 405Q247 455 336 455Q397 455 439 389T482 226Q482 115 428 52T303 -11ZM390 221Q390 283 361 331T265 379Q214 379 177 342L168 334V118Q203 66 258 66Q316 66 353 106T390 221',
    0x63: '34 223Q34 327 99 393T245 460Q290 460 301 459Q328 455 354 445T395 427T410 415L396 338L386 344Q377 349 362 357T335 370Q305 381 258 381H252Q182 381 146 315Q126 275 126 224Q126 158 159 113T255 68Q329 68 394 106L408 114L410 93Q411 72 412 52L414 32Q407 27 394 20T338 2T252 -10Q156 -10 95 58T34 223',
    0x64: '33 224Q33 321 81 388T197 455Q277 455 342 414L351 408V694H441V0H348V44L338 37Q278 -10 198 -10Q177 -10 168 -8Q99 11 62 90Q33 148 33 224ZM348 337Q307 378 263 378Q260 378 256 378T251 379Q239 379 223 374T182 355T142 305T126 220Q126 90 225 67Q231 66 250 66H255Q306 66 342 115L348 124V337',
    0x65: '28 226Q28 329 91 395T235 461Q258 461 279 456T325 436T368 397T399 332T415 238V219H113V215Q113 163 151 114T248 65Q273 65 298 70T341 82T373 96T396 108L403 113Q403 106 406 76T409 38Q409 34 408 33T393 24Q325 -10 252 -10Q155 -10 92 59T28 226ZM340 289L338 297Q335 305 333 310T327 326T317 343T304 358T286 372T263 381T233 385Q212 385 193 376T162 353T140 325T127 301T123 289H340',
    0x66: '262 705H267Q300 705 347 694V612L336 616Q303 628 274 628H266Q224 628 199 605Q187 590 184 579T181 541V507V444H287V371H184V0H94V371H27V444H94V492Q94 544 95 550Q102 617 151 661T262 705',
    0x67: '55 286Q55 357 105 406T224 455Q280 455 323 421L322 423L318 427Q318 428 339 434T396 448T465 455H471L478 416L485 377Q484 377 474 379T445 383T401 385Q397 385 391 385T381 384L362 383L357 387Q358 386 364 375T375 354T384 325T389 287Q389 217 340 168T221 119Q178 119 138 142Q133 145 131 143Q125 131 125 117Q125 82 155 72L227 71Q230 71 251 71T280 71T310 69T343 65T373 57T403 46T428 30T449 7Q471 -26 471 -62V-71Q471 -136 384 -178Q326 -206 250 -206Q159 -206 102 -172T30 -92Q28 -84 28 -68T31 -37T40 -12T52 7T64 21T75 31T82 38Q60 68 60 106Q60 145 80 180L86 189L80 199Q55 240 55 286ZM304 233T304 287T279 362T220 383Q189 383 165 361T140 287Q140 243 161 217T220 191Q253 191 278 212ZM250 -134Q298 -134 331 -122T375 -96T387 -69Q387 -21 306 -7Q288 -5 216 -5Q161 -5 153 -7Q146 -9 139 -13T122 -31T113 -66Q113 -75 113 -80T127 -97T166 -121Q203 -134 250 -134',
    0x68: '163 395Q223 455 307 455Q417 455 438 354Q442 331 443 164V0H350V157Q349 315 348 320Q334 378 259 378H253Q224 378 204 358Q180 334 173 301T165 209Q165 198 165 172T166 129V0H73V694H163V395',
    0x69: '67 576V680H171V576H67ZM74 0V444H164V0H74',
    0x6A: '88 576V680H192V576H88ZM31 -126Q40 -126 48 -125T62 -122T73 -117T82 -111T89 -105T94 -99T98 -92L102 -86V444H192V180Q191 -45 191 -70T184 -113Q171 -152 140 -178T63 -205Q34 -205 4 -197T-43 -181T-59 -171T-51 -133T-41 -96L-38 -99Q-34 -102 -28 -106T-13 -115T7 -123T31 -126',
    0x6B: '76 0V694H163V257L340 444H449L286 272L292 263Q296 259 378 138T463 12L471 0H372L309 92Q294 114 277 139T250 179T237 198L228 211L160 139V0H76',
    0x6C: '74 0V694H164V0H74',
    0x6D: '160 392Q223 455 304 455Q359 455 386 436T430 383L437 391Q495 455 584 455Q694 455 715 354Q719 331 720 164V0H627V157Q626 315 625 320Q611 378 536 378H530Q501 378 481 358Q457 334 450 301T442 209Q442 198 442 172T443 129V0H350V157Q349 315 348 320Q334 378 259 378H253Q224 378 204 358Q180 334 173 301T165 209Q165 198 165 172T166 129V0H73V450H160V392',
    0x6E: '160 392Q214 446 283 454Q285 454 292 454T303 455H306Q417 455 438 354Q442 331 443 164V0H350V157Q349 315 348 320Q334 378 259 378H253Q224 378 204 358Q180 334 173 301T165 209Q165 198 165 172T166 129V0H73V450H160V392',
    0x6F: '28 222Q28 323 95 391T244 460Q275 460 281 459Q364 445 417 377T471 219Q471 124 408 57T250 -10Q158 -10 93 57T28 222ZM377 230Q377 277 364 310T328 358T287 379T248 385Q233 385 219 382T186 369T155 342T132 297T122 230Q122 146 159 108T250 69H253Q263 69 274 70T305 81T339 106T365 154T377 230',
    0x70: '166 404Q194 424 241 439T337 455H341Q410 455 451 370Q483 307 483 222Q483 128 433 59T306 -10Q282 -10 260 -5T222 7T194 21T176 33T168 38V-194H75V444H165V424L166 404ZM390 222Q390 287 354 331T266 376T177 340L168 332V118Q200 66 257 66Q313 66 351 112T390 222',
    0x71: '33 220Q33 325 87 389T206 454Q286 454 341 406L351 398V455H441V-194H348V41L338 35Q276 -8 198 -11Q171 -11 154 -5Q102 12 68 74T33 220ZM126 220Q126 160 161 113T251 65Q305 65 351 123V298L350 301Q349 304 347 308T342 319T336 331T327 343T315 355T300 365T283 373Q273 375 256 375Q208 375 167 332T126 220',
    0x72: '171 389Q237 455 320 455H327V373H317Q262 369 220 336T167 248Q165 239 164 119V0H74V450H159V377L171 389',
    0x73: '33 326Q33 376 60 408T117 450T175 460H190Q245 460 272 454T345 429Q345 428 338 388L331 349Q278 386 188 386H183Q119 386 119 336Q119 307 142 295T210 276T278 256Q360 213 360 130Q360 108 354 88T332 43T281 5T195 -10Q152 -10 111 1T49 22T28 35Q29 36 32 56T39 95T43 115T51 110T72 99T102 85T143 73T193 68Q274 68 274 123Q274 152 248 167Q234 178 187 186T115 207Q66 229 46 273Q33 298 33 326',
    0x74: '333 27Q333 24 314 16T257 -1T184 -10H172Q146 -10 128 14T105 58T99 91Q95 113 95 251V371H18V444H98V571H182V444H316V371H182V253Q183 128 189 104Q199 68 234 68Q277 72 314 98Q315 93 323 61T333 27',
    0x75: '353 39Q352 38 344 34T331 27T315 19T295 11T270 3T241 -3T207 -8T168 -10H162Q148 -10 137 -8T111 2T87 30T74 81Q73 89 73 268V444H166V268L167 92Q171 79 174 74T192 64T238 59Q317 59 344 116Q349 128 349 148T350 291V444H443V0H353V39',
    0x76: '178 0Q15 441 14 442Q14 444 60 444Q107 444 107 442Q108 441 136 364T196 194T232 67Q233 98 280 234T356 442Q356 444 401 444T446 442L282 0H178',
    0x77: '14 444H105L108 434Q192 160 200 74V65L201 75Q206 144 282 399L296 444H381L399 381Q480 112 480 69L481 70Q481 113 562 386L580 444H668L534 1L483 0H432L429 10Q343 294 338 367L337 377Q336 375 336 370Q336 340 313 250T269 88T245 11L242 0H195L148 1L14 444',
    0x78: '187 229L6 444H107L227 294L344 444H393L442 443Q439 437 299 268L267 229L460 0H359L294 88Q280 107 262 131T236 166L227 177L100 0H0Q1 1 47 58T140 171T187 229',
    0x79: '113 -204Q83 -204 63 -200L43 -197Q43 -196 40 -157T36 -117L48 -121Q79 -133 114 -133Q124 -133 130 -132T145 -121T163 -94Q169 -82 184 -42T200 1L188 29Q176 57 152 115T107 223T62 330T26 416L14 443Q14 444 61 444H109L122 411Q230 155 236 75L237 65V74Q245 161 348 424L356 444H401Q446 444 446 443L396 313Q345 183 293 49T236 -93Q191 -204 123 -204H113',
    0x7A: '42 370V444H400V395L156 76L279 77H402V0H28V51L273 371L157 370H42',
    0x7E: '83 204Q86 254 113 290T186 327Q211 327 251 299T312 270Q337 270 340 315V327H416V316Q413 258 382 226T315 193Q289 193 249 221T187 250Q162 250 159 205V193H83V204',
    0xA0: '',
    0x131: '74 0V444H164V0H74',
    0x237: '-35 -95Q-4 -126 34 -126Q58 -126 76 -116T100 -88Q102 -82 102 181V444H192V180Q191 -45 191 -70T184 -113Q171 -152 140 -178T63 -205Q34 -205 4 -197T-43 -181T-59 -171L-47 -133L-35 -95',
    0x300: '-415 692L-417 694H-324L-262 612Q-249 594 -233 572T-208 539L-200 528L-237 527H-275L-344 608Q-359 625 -378 647T-406 680T-415 692',
    0x301: '-239 612L-177 694H-84L-86 692Q-86 691 -95 681T-123 648T-157 608L-226 527H-264L-301 528L-293 539Q-285 550 -269 572T-239 612',
    0x302: '-354 612L-288 694H-213L-147 612Q-83 532 -80 529Q-79 528 -82 527Q-86 527 -117 527H-155L-250 639Q-256 633 -301 580L-346 527H-384Q-421 528 -421 529Q-418 532 -354 612',
    0x303: '-417 554Q-414 604 -387 640T-314 677Q-289 677 -249 649T-188 620Q-163 620 -160 665V677H-84V666Q-87 608 -118 576T-185 543Q-211 543 -251 571T-313 600Q-338 600 -341 555V543H-417V554',
    0x304: '-431 552V631H-70V552H-431',
    0x306: '-250 508Q-331 508 -379 567T-427 689V694H-351V685Q-348 649 -321 620T-250 591Q-206 591 -180 619T-150 685V694H-74V689Q-74 624 -122 566T-250 508',
    0x307: '-302 576V680H-198V576H-302',
    0x308: '-397 582V680H-299V582H-397ZM-202 582V680H-104V582H-202',
    0x30A: '-319 611Q-319 649 -285 671T-211 694Q-164 694 -132 671T-99 611Q-99 572 -133 550T-209 527T-285 549T-319 611ZM-155 610Q-155 635 -171 643T-215 651Q-263 651 -263 610Q-263 570 -211 570H-209H-207Q-155 570 -155 610',
    0x30B: '-250 693Q-317 544 -323 527H-399L-343 694H-296Q-250 694 -250 693ZM-84 693Q-151 544 -157 527H-233L-177 694H-130Q-84 694 -84 693',
    0x30C: '-421 652Q-422 653 -419 654Q-415 654 -384 654H-346L-301 601Q-287 585 -275 571T-258 551T-250 542L-155 654H-117Q-80 653 -80 652Q-83 649 -147 569L-213 487H-288L-354 569Q-418 649 -421 652',
    0x391: '183 181Q183 179 152 91T118 0H28L154 346L280 693Q281 694 333 694H385L511 349Q636 4 638 2Q638 0 584 0H530L464 183H184L183 181ZM324 606Q319 578 292 492T238 332T210 256Q210 254 324 254T438 255L429 281L419 308Q409 336 395 378T365 465T339 551T324 611V606',
    0x392: '425 363Q438 363 465 353T526 324T585 270T610 192Q610 132 561 78T426 7Q404 2 387 2T240 0H90V694H227Q373 693 396 689Q484 673 533 623T583 517Q583 494 574 473T551 437T520 409T487 388T456 374T433 366L425 363ZM490 516Q490 527 485 539T467 568T423 599T347 621Q340 622 262 623H188V399H261H286Q432 399 478 475Q490 496 490 516ZM514 190Q514 245 462 280T343 322Q336 323 259 323H188V71H274Q365 72 388 77Q445 88 479 121T514 190',
    0x393: '87 0V691H499V611H345L191 612V0H87',
    0x394: '203 348L362 694H470L629 348Q789 2 790 1Q790 0 416 0T42 1Q43 2 203 348ZM630 98Q630 100 584 198T481 422T407 603L405 610L403 600Q388 544 191 122L180 99L405 98H630',
    0x395: '86 0V691H541V611H366L190 612V397H513V321H190V85H372L554 86V0H86',
    0x396: '69 617V694H555V643L373 362Q190 81 190 79H234Q244 79 272 79T344 80T419 81H560V0H55V53L237 334Q420 615 420 617Q413 618 387 618Q380 618 334 618T245 617H69',
    0x397: '86 0V694H190V399H517V694H621V0H517V323H190V0H86',
    0x398: '56 344Q56 430 86 502T164 619T271 690T388 716Q448 716 506 691T613 619T692 501T722 344Q722 188 624 84T389 -21Q252 -21 154 83T56 344ZM624 345Q624 423 597 488T513 596T380 639Q343 639 305 621T232 568T175 475T153 344Q153 216 222 136T388 56Q487 56 555 138T624 345ZM209 299V397H568V299H209',
    0x399: '87 0V694H191V0H87',
    0x39A: '88 0V694H188V519L189 343L525 694H638L375 419L651 0H541L309 351L188 225V0H88',
    0x39B: '294 606Q294 574 252 430T163 144T117 0H72Q28 0 28 1T141 348L254 694H357L469 348Q582 2 582 1T527 0L473 1L469 11Q469 13 427 141T343 411T296 599L294 610V606',
    0x39C: '92 0V694H228L233 680Q236 675 284 547T382 275T436 106Q446 149 497 292T594 558L640 680L645 694H782V0H689V305L688 606Q688 577 500 78L479 23H392L364 96Q364 97 342 156T296 280T246 418T203 544T186 609V588Q185 568 185 517T185 427T185 305V0H92',
    0x39D: '88 0V694H235L252 659Q261 639 364 428T526 84V694H619V0H472L455 35Q453 39 330 294T185 601L181 611V0H88',
    0x39E: '47 600V688H619V600H47ZM111 314V401H555V314H111ZM42 0V88H624V0H42',
    0x39F: '55 345Q55 504 149 609T361 715Q386 715 406 713Q521 696 600 592T680 344Q680 193 590 86T368 -22Q239 -22 147 84T55 345ZM276 59T368 59T518 146T576 360Q576 473 525 545T401 634Q371 637 362 637Q284 637 222 562T159 360T217 147',
    0x3A0: '86 0V691H621V0H517V615H190V0H86',
    0x3A1: '88 0V694H230Q347 693 370 692T410 686Q487 667 535 611T583 485Q583 409 527 348T379 276Q369 274 279 274H192V0H88ZM486 485Q486 523 471 551T432 593T391 612T357 621Q350 622 268 623H189V347H268Q350 348 357 349Q370 351 383 354T416 368T450 391T475 429T486 485',
    0x3A2: '56 344Q56 430 86 502T164 619T271 690T388 716Q448 716 506 691T613 619T692 501T722 344Q722 188 624 84T389 -21Q252 -21 154 83T56 344ZM624 345Q624 423 597 488T513 596T380 639Q343 639 305 621T232 568T175 475T153 344Q153 216 222 136T388 56Q487 56 555 138T624 345ZM209 299V397H568V299H209',
    0x3A3: '55 0Q56 3 171 167T288 332Q288 334 172 474L55 615V694H666V614H428L190 615L412 347L322 218Q236 97 228 84L447 85H666V0H55',
    0x3A4: '36 608V688H644V608H518L392 609V0H288V609L162 608H36',
    0x3A5: '55 565Q59 625 105 670T219 716H222Q310 716 353 627Q376 583 386 524L389 510L393 532Q397 555 407 584T433 644T482 695T557 716Q621 716 669 673T722 565V555H629V563Q627 592 607 615T557 638Q530 638 511 629T479 598T459 553T447 488T442 411T441 319V202V0H337V202Q337 453 331 497Q313 634 226 638Q185 638 167 612T148 563V555H55V565',
    0x3A6: '666 347Q666 326 661 302T638 247T594 190T520 140T413 107H410V0H312V54Q312 107 311 107Q286 107 229 128T125 192Q55 260 55 347Q55 396 77 438T131 507T200 552T265 579T311 587Q312 587 312 641V694H410V587H413Q476 576 524 552T598 502T640 444T661 390T666 347ZM310 510Q305 510 291 507T252 492T208 464T172 416T157 347T171 279T204 233T247 205T286 190T310 184H312V347Q312 510 310 510ZM564 347Q564 385 549 416T514 463T470 491T433 505T414 509L410 510V184Q413 184 426 187T464 200T510 227T548 275T564 347',
    0x3A7: '14 0Q16 5 144 184T275 367L153 528Q121 571 88 615T42 674T28 694H150L228 584Q315 463 316 461L326 448L497 694H610L609 692Q606 689 492 528Q440 454 409 410T378 366Q378 365 515 182L652 0H531L326 292Q326 293 299 254T226 146L128 0H14',
    0x3A8: '340 187V694H438V187Q481 206 495 219Q518 239 533 267T553 332T560 386T562 435Q562 576 593 608Q608 621 637 621H670H722V545H719Q718 545 715 545T710 544Q679 536 666 487Q664 474 662 429T654 344T633 259T580 175T486 119Q450 109 438 108V0H340V108L326 110Q122 149 117 415Q116 460 111 487Q98 536 67 544Q65 544 62 544T58 545H55V621H107Q160 621 163 620Q191 613 202 573Q213 536 213 473T220 351T256 249Q262 239 270 230T285 216T301 205T316 197T329 192T340 187',
    0x3A9: '55 462Q55 561 141 638T359 716Q492 716 579 640T666 462Q666 407 642 347T579 222T529 126Q515 91 515 86Q517 85 528 85Q530 85 552 85T596 86H677V0H425V14Q429 79 465 168L492 228Q494 232 504 254T516 283T527 310T539 340T548 368T556 399T560 428T562 460Q562 531 510 585T361 639Q263 639 211 585T159 460Q159 422 170 378T192 309T229 228L256 168Q292 79 296 14V0H44V86H125Q146 86 168 86T193 85L206 86Q206 103 183 148T131 241T79 352T55 462',
    0x3D2: '55 565Q59 625 105 670T219 716H222Q310 716 353 627Q376 583 386 524L389 510L393 532Q397 555 407 584T433 644T482 695T557 716Q621 716 669 673T722 565V555H629V563Q627 592 607 615T557 638Q530 638 511 629T479 598T459 553T447 488T442 411T441 319V202V0H337V202Q337 453 331 497Q313 634 226 638Q185 638 167 612T148 563V555H55V565',
    0x3DC: '86 0V691H526V611H358L190 612V384H485V308H190V0H86',
    0x2013: '0 236V312H499V236H0',
    0x2014: '0 236V312H999V236H0',
    0x2015: '0 236V312H999V236H0',
    0x2017: '0 -114V-38H499V-114H0',
    0x2018: '90 568L140 694H189L174 633Q159 572 158 571Q158 569 173 569H188V471H90V568',
    0x2019: '90 596V694H188V597L139 471H89L104 532Q119 593 120 594Q120 596 105 596H90',
    0x201C: '174 568L224 694H273L258 633Q243 572 242 571Q242 569 257 569H272V471H174V568ZM368 568L418 694H467L452 633Q437 572 436 571Q436 569 451 569H466V471H368V568',
    0x201D: '33 596V694H131V597L82 471H32L47 532Q62 593 63 594Q63 596 48 596H33ZM227 596V694H325V597L276 471H226L241 532Q256 593 257 594Q257 596 242 596H227',
    0x2044: '423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750',
    0x2206: '203 348L362 694H470L629 348Q789 2 790 1Q790 0 416 0T42 1Q43 2 203 348ZM630 98Q630 100 584 198T481 422T407 603L405 610L403 600Q388 544 191 122L180 99L405 98H630',
}, {});
//# sourceMappingURL=sans-serif.js.map