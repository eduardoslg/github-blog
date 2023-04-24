import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ExternalLink } from '../../../../components/ExternalLink'
import { ProfileContainer, ProfileDetails, ProfilePicture } from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://github.com/eduardoslg.png" />

      <ProfileDetails>
        <header>
          <h1>Eduardo Lage</h1>

          <ExternalLink
            text="Github"
            href="https://github.com/eduardoslg"
            target="_blank"
          />
        </header>

        <p>
          25 anos, morador da cidade de São José do Rio Preto, estudante de ADS
          (Análise e Desenvolvimento de Sistemas) na UNIRP e desenvolvedor
          Frontend desde 10/2022. Desde 06/2021 estudando programação com foco
          no Frontend.
        </p>

        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            eduardoslg
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            ATM Outsourcing
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />2 seguidores
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  )
}
