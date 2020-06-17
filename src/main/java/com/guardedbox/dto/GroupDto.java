package com.guardedbox.dto;

import java.io.Serializable;
import java.util.List;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.Getter;
import lombok.Setter;

/**
 * DTO: Group.
 *
 * @author s3curitybug@gmail.com
 *
 */
@JsonInclude(Include.NON_NULL)
@Getter
@Setter
@SuppressWarnings("serial")
public class GroupDto
        implements Serializable {

    /** Group ID. */
    private UUID groupId;

    /** Owner Account. */
    private AccountDto ownerAccount;

    /** Name. */
    private String name;

    /** Encrypted Key. */
    private String encryptedKey;

    /** Must Rotate Key. */
    private Boolean mustRotateKey;

    /** Number of Participants. */
    private Integer numberOfParticipants;

    /** Number of Ex Members. */
    private Integer numberOfExMembers;

    /** Participants Visible. */
    private Boolean participantsVisible;

    /** Secrets. */
    private List<SecretDto> secrets;

}
