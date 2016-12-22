package ua.knure.laposhko.repository;

import ua.knure.laposhko.domain.UserProfile;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Spring Data JPA repository for the UserProfile entity.
 */
@SuppressWarnings("unused")
public interface UserProfileRepository extends JpaRepository<UserProfile,Long> {

    @Query("select distinct userProfile from UserProfile userProfile left join fetch userProfile.subjects")
    List<UserProfile> findAllWithEagerRelationships();

    @Query("select userProfile from UserProfile userProfile left join fetch userProfile.subjects where userProfile.id =:id")
    UserProfile findOneWithEagerRelationships(@Param("id") Long id);

    UserProfile findByEmail(String email);

}
