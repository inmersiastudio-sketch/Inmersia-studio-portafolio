const fs = require('fs');
let code = fs.readFileSync('src/components/Footer.jsx', 'utf8');

code = code.replace(`                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>`, `                      {t('nav', keys[mapKey] || link.name) || link.name}
                    </a>
                  </li>
                );})}
              </ul>`);

fs.writeFileSync('src/components/Footer.jsx', code);
